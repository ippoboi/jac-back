import { User } from 'src/models/user/entity/User.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  ManyToMany,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, (user) => user.role)
  @JoinColumn()
  user: User[];

  @Column()
  roleLabel: string;
}
