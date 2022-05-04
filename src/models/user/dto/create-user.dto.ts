import { IsOptional } from 'class-validator';

export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // phone: number;
  roleId: number;
  @IsOptional()
  dateOfBirth: Date;
  createdAt: Date;
  isActive: boolean;
}
