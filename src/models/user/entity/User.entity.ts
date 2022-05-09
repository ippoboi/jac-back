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
} from 'typeorm';
import { Role } from '../../role/entity/Role.entity';
import * as bcrypt from 'bcrypt';
import { Registration } from 'src/models/registration/entity/Registration.entity';

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

  @Column({ unique: true, nullable: true })
  phone: number;

  @Column({ default: 1 })
  roleId: number;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  job: string;

  @OneToMany(() => Registration, (registration) => registration.user)
  registration: Registration[];

  @ManyToOne(() => Role, { cascade: true, eager: true })
  @JoinTable()
  role: Role[];

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
