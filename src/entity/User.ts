import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  ManyToOne,
} from 'typeorm';
import { Role } from './Role';
import { roleLabelsEnum } from './roleLabelsEnum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column({
    type: 'enum',
    enum: roleLabelsEnum,
    default: roleLabelsEnum.MEMBER,
  })
  roleId: number;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @Column()
  createdAt: Timestamp;

  @Column()
  isActive: boolean;
}
