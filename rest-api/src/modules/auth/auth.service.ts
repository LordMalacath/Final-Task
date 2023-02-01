/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../user/users.service"


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.getUserByEmail(email);
      await this.verifyPassword(pass, user.password);
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    };
  }

  async verifyPassword(pass: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      pass,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  async signin(user: any) {
    const payload = { name: user.name, email: user.email, sub: user.id };
    const data = {
      user,
      access_token: this.jwtService.sign(payload)
    }
    return data
  }

  logout() {

  }
}