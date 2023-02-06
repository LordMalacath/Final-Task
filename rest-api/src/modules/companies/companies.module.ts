/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company, User } from "src/typeorm";
import { CompanyController } from "./companies.controller";
import { CompanyService } from "./companies.service";

@Module({
  imports: [TypeOrmModule.forFeature([Company, User])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})

export class CompanyModule { }