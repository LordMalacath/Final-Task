/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt'
import { User } from "src/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }

  async findUsersById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id
      }
    });
    if (user) {
      const { password, ...data } = user;
      return data;
    };
    throw new HttpException('User does not exist!', HttpStatus.NOT_FOUND)
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: {
        email: email
      }
    });
    if (user) {
      return user;
    };
    throw new HttpException('User with this email does not exist!', HttpStatus.NOT_FOUND)
  }

  async validateUserExist(nickName: string, email: string, phone: string) {
    const user = this.usersRepository.find({
      where: [
        { nickName },
        { email },
        { phone },
      ],
    });
    if (user) {
      console.log(user, "EXIST")
      throw new HttpException('User already exist!', HttpStatus.CONFLICT);
    }
  }

  async registerUser(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const createdUser = await this.createUser({
        ...createUserDto,
        password: hashedPassword
      });
      const { password, ...user } = createdUser;
      return user;
    } catch (error) {
      throw new HttpException('User already exist!', HttpStatus.CONFLICT);
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser)
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update({ id }, { ...updateUserDto })
    return await this.findUsersById(id);
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