/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../user/users.service"
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.getUserByEmail(email);
      await this.verifyPassword(pass, user.password);
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new HttpException('Wrong email or password', HttpStatus.BAD_REQUEST);
    };
  }

  async verifyPassword(pass: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      pass,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong email or password', HttpStatus.BAD_REQUEST);
    }
  }

  async signin(user: any) {
    const payload = { name: user.name, email: user.email, sub: user.id };
    const { companies, ...userProfile } = await this.getInitialData(user.id)
    const data = {
      userProfile,
      companies,
      access_token: this.jwtService.sign(payload)
    }
    return data
  }

  async getInitialData(id: number) {
    const result = await this.usersRepository.find({
      relations: {
        companies: true,
      },
      where: {
        id: id
      },
    });
    const { password, ...response } = result[0]
    return response;
  }
}