import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";
import { eventsCategory } from "./eventsCategory";

@Entity()
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    isOpen: boolean; //if places available

    @Column()
    isActive: boolean; //if event is cancelled

    @Column()
    placesNb: number;

    @Column()
    adminId: number; //the admin user who created the event

    @Column()
    category: eventsCategory;

    @Column()
    date: Date;

    @Column()
    createdAt: Date;
}