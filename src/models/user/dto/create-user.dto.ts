export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // phone: number;
  roleId: number;
  dateOfBirth: Date;
  createdAt: Date;
  isActive: boolean;
}
