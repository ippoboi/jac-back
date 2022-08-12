import { Event } from 'src/entities/Event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class eventsCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Event, (id) => id.category)
  eventId: Event;

  @Column()
  name: string;
}
