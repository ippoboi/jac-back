import { User } from 'src/models/user/entity/User.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.role)
  user: User[];

  @Column()
  name: string;
}
