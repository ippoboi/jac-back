import { IsOptional } from 'class-validator';

export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  @IsOptional()
  phone: number;
  roleId: number;
  @IsOptional()
  dateOfBirth: Date;
  createdAt: Date;
  isActive: boolean;
}
