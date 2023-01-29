/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm";
import { Repository } from "typeorm";
import { CreateUsersDto } from "./dto/users.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) { }

    getUsers() {
        return this.usersRepository.find()
    }

    findUsersById(id: number) {
        return this.usersRepository.findOne({
            where: {
                id: id
            }
        })
    }

    createUser(createUsersDto: CreateUsersDto) {
        const newUser = this.usersRepository.create(createUsersDto);
        return this.usersRepository.save(newUser)
    }
}