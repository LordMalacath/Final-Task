/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";
import { Company } from "src/typeorm";

export class UpdateUserDto {
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

    @IsNotEmpty()
    password: string;

    companies: Company[]
}