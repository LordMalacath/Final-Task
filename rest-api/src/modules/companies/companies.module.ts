/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
    providers: [CompaniesService],
    controllers: [CompaniesController]
})
export class CompaniesModule { }
