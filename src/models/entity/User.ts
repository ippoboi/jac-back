import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";
import { Role } from "./Role";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column({nullable: false})
    roleId: number;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @ManyToOne(() => Role, role => role.id) //not sure abt label
    role: Role;

    @Column()
    createdAt: Timestamp;

    @Column()
    isActive: boolean;

}