import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from '../../role/entity/Role.entity';
import { roleLabelsEnum } from 'src/entity/roleLabelsEnum.enum';

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

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: roleLabelsEnum,
    default: roleLabelsEnum.MEMBER,
  })
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
