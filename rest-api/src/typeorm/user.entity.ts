/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    nickName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    position: string;

    @Column()
    description: string;
}
