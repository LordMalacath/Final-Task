/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm";
import { UsersController } from "./users.controllers";
import { UsersService } from "./users.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]),],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule { }