/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CompanyService } from "./companies.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/updateCompany.dto";

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createPost(
    @Body() createCompany: CreateCompanyDto,
    @Req() req,
  ) {
    return this.companyService.createCompany(createCompany, req.user)
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyDto: UpdateCompanyDto
  ) {
    await this.companyService.updateCompany(id, updateCompanyDto)
  }

  @Get('list')
  @UseGuards(JwtAuthGuard)
  getUserCompanies() {
    return this.companyService.getUserCompanies()
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseIntPipe) id: number
  ) {
    await this.companyService.deleteCompany(id)
  }
}