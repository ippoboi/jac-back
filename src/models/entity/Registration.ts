import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { User } from "../user/entities/user.entity";
import { Event } from "./Event";

@Entity()
export class Registration {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @OneToMany(() => User, user => user.id)
    user: User

    @Column()
    eventId: number;

    @OneToMany(() => Event, event => event.id)
    event: Event
}