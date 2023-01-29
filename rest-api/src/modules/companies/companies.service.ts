/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Injectable()
export class CompaniesService {
    private companies = []

    getAll() {
        return this.companies
    }

    getChosed(id: string) {
        return this.companies.find(item => item.id === id)
    }

    create(createCompanyDto: CreateCompanyDto) {
        return this.companies.push({
            ...createCompanyDto,
            'id': Date.now().toString()
        })
    }
}