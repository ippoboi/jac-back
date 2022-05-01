import {
  Entity,
  Column,
  ManyToOne,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Role } from '../../role/entity/Role.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // @BeforeInsert()
  // generate() {
  //   this.id = uuidv4();
  // }

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column({ unique: true })
  // phone: number;

  @Column({ default: 1 })
  roleId: number;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isActive: boolean;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
