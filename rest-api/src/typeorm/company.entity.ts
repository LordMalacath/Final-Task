/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'company_id',
  })
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  adress: string;

  @Column()
  serviceOfActivity: string;

  @Column()
  numberOfEmployees: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @ManyToOne(() => User, (user) => user.companies)
  @JoinColumn()
  owner: User
};
