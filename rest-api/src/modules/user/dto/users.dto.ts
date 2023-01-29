/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUsersDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    nickName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    position: string;

    @IsNotEmpty()
    description: string;
}