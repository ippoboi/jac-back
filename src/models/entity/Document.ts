import {Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne} from "typeorm";

@Entity()
export class Document {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    eventId: number;

    @Column({nullable: false})
    path: string; //where the file is stored in the file system
}