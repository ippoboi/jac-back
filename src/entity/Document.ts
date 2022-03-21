import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, OneToOne} from "typeorm";
import { Event } from "./Event";

@Entity()
export class Document {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    eventId: number;

    @OneToOne(() => Event, event => event.id)
    event: Event;

    @Column({nullable: false})
    path: string; //where the file is stored in the file system
}