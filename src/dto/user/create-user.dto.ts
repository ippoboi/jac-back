import { IsOptional } from 'class-validator';
import { Role } from 'src/entities/Role.entity';

export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  @IsOptional()
  phone: number;
  role: Role[];
  token: string;
  @IsOptional()
  age: number;
  job: string;
  createdAt: Date;
  isActive: boolean;
}
