import { User } from 'src/models/user/entity/User.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.id)
  user: User[];

  @Column()
  name: string;
}
