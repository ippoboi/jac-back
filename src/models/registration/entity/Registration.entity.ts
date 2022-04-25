import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from '../../event/entity/Event.entity';
import { User } from '../../user/entity/User.entity';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @OneToMany(() => User, (user) => user.id)
  user: User;

  @Column()
  eventId: number;

  @OneToMany(() => Event, (event) => event.id)
  event: Event;
}
