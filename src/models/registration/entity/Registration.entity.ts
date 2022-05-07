import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Event } from '../../event/entity/Event.entity';
import { User } from '../../user/entity/User.entity';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.registration)
  user: User;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.registration)
  event: Event;
}
