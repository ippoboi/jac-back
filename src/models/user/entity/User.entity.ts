import {
  Entity,
  Column,
  ManyToOne,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../role/entity/Role.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  generate() {
    this.id = uuidv4();
  }

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  roleId: number;

  @Column()
  dateOfBirth: Date;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  isActive: boolean;
}
