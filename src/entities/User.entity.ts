import {
  Entity,
  Column,
  ManyToOne,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Role } from './Role.entity';
import * as bcrypt from 'bcrypt';

import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: true })
  phone: number;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  job: string;

  @ManyToMany(() => Role, { cascade: true, eager: true })
  @JoinTable()
  role: Role[];

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @Column({ default: false, select: false })
  isActive: boolean;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  town: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  bio: string;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
