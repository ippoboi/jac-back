import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";

@Entity()
export class Question {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    answer: string;
}