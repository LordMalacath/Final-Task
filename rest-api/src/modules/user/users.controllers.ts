/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UsersService } from "./users.service";

@Controller('profile')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto)
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.usersService.getUsers()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUsersById(id)
  }

  @Get('email')
  @UseGuards(JwtAuthGuard)
  findUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email)
  }

  @Put('update')
  @UseGuards(JwtAuthGuard)
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Req() req,
  ) {
    return this.usersService.updateUser(req.user.id, updateUserDto)
  }
}