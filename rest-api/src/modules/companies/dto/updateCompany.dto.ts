/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator"
import { User } from "src/typeorm";

export class UpdateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  adress: string;

  @IsNotEmpty()
  serviceOfActivity: string;

  @IsNotEmpty()
  numberOfEmployees: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  type: string;

  owner: User;
};
