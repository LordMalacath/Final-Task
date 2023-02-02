/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company, User } from "src/typeorm";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/updateCompany.dto";

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private readonly companyRepository: Repository<Company>) { }

  getAllCompanies() {
    return this.companyRepository.find()
  }

  createCompany(createCompanyDto: CreateCompanyDto, owner: User) {
    const newCompany = this.companyRepository.create({
      ...createCompanyDto, owner: owner
    });
    return this.companyRepository.save(newCompany)
  }

  async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto) {
    await this.companyRepository.update({ id }, { ...updateCompanyDto })
    return await this.getCompanyById(id)
  }

  deleteCompany(id: number) {
    return this.companyRepository.delete({ id })
  }

  async getCompanyById(id: number) {
    return await this.companyRepository.findOne({ where: { id: id } });
  }

  async getUserCompanies(id: number) {
    const result = await this.companyRepository.find({
      relations: {
        owner: true,
      },
    })
    const response = result.map(item => {
      const { owner, ...companyData } = item;
      return companyData;
    })
    return response;
  }
}
