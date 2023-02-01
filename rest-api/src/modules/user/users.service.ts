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

  getUsers() {
    return this.usersRepository.find()
  }

  async findUsersById(id: number) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id
      }
    });
    if (user) {
      const {password, ...data} = user;
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

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser)
  }

  async registerUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = await this.createUser({
      ...createUserDto,
      password: hashedPassword
    });
    const { password, ...user } = createdUser;
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update({ id }, { ...updateUserDto })
    const result = await this.findUsersById(id);
    return result
  }
}