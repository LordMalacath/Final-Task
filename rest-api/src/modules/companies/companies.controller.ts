/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {

    constructor(private readonly companiesService: CompaniesService) { }

    @Get()
    getAll() {
        return this.companiesService.getAll()
    }

    @Get(':id')
    getChosed(@Param('id') id: string) {
        return this.companiesService.getChosed(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companiesService.create(createCompanyDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return 'Remove ' + id
    }

    @Put(':id')
    update(@Body() updateCompanyDto: UpdateCompanyDto, @Param('id') id: string) {
        return 'Update ' + id
    }
}
