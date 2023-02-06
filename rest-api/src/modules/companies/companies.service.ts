/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company, User } from "src/typeorm";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/updateCompany.dto";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private readonly companyRepository: Repository<Company>,
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) { }

  getAllCompanies() {
    return this.companyRepository.find()
  }

  async validateCompanyExist(name: string) {
    const company = await this.companyRepository.findOne({
      where: {
        name
      },
    });
    if (company) {
      throw new HttpException('Company already exist!', HttpStatus.CONFLICT);
    }
  }

  async createCompany(createCompanyDto: CreateCompanyDto, owner: User) {
    try {
      await this.validateCompanyExist(createCompanyDto.name);
      const newCompany = this.companyRepository.create({
        ...createCompanyDto, owner: owner
      });
      return this.companyRepository.save(newCompany);
    } catch (error) {
      throw new HttpException('Company already exist!', HttpStatus.CONFLICT);
    }
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
    const result = await this.usersRepository.find({
      relations: {
        companies: true,
      },
      where: {
        id: id
      },
    });
    const { companies, ...response } = result[0];
    return companies;
  }

  async getSortedList(id: number, sort: string) {
    const list = await this.getUserCompanies(id);
    const sortedList = list.sort(function (a, b) {
      if (a[sort] > b[sort]) {
        return 1;
      }
      if (a[sort] < b[sort]) {
        return -1;
      }
      return 0;
    })
    return sortedList
  }
}
