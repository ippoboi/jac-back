import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { eventsCategory } from 'src/models/events-category/entities/eventsCategory.entity';
import { User } from 'src/models/user/entity/User.entity';
import { Registration } from 'src/models/registration/entity/Registration.entity';

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
  category: number;

  @OneToMany(() => Registration, (registration) => registration.event)
  registration: Registration[];

  @ManyToOne(() => eventsCategory, (category) => category.id)
  categoryId: eventsCategory;

  @Column()
  date: Date;

  @Column()
  createdAt: Date;
}
