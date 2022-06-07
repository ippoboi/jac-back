import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  BaseEntity,
} from 'typeorm';
import { eventsCategory } from 'src/models/events-category/entities/eventsCategory.entity';
import { User } from 'src/models/user/entity/User.entity';

@Entity()
export class Event extends BaseEntity {
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

  @ManyToMany(() => User, { cascade: true, eager: true })
  @JoinTable()
  registered_user: User[];

  @ManyToOne(() => eventsCategory, (category) => category.id)
  categoryId: eventsCategory;

  @Column({ nullable: true })
  date: string;

  @Column('time', { name: 'startTime', nullable: true })
  startHour: Date;

  @Column('time', { name: 'endTime', nullable: true })
  endHour: Date;

  @Column({ nullable: true })
  createdAt: Date;
}
