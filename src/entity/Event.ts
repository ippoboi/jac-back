import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { eventsCategoryEnum } from './eventsCategoryEnum';
import { User } from './User';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text', { default: '' })
  description: string;

  @Column()
  isOpen: boolean; //if places available

  @Column()
  isActive: boolean; //if event is cancelled

  @Column()
  placesNb: number;

  @Column()
  adminId: number; //the admin user who created the event

  @OneToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  category: eventsCategoryEnum;

  @Column()
  date: Date;

  @Column()
  createdAt: Date;
}
