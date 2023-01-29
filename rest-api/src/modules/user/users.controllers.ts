/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUsersDto } from "./dto/users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }

    @Get(':id')
    findUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findUsersById(id)
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUsersDto: CreateUsersDto) {
        return this.usersService.createUser(createUsersDto)
    }
}