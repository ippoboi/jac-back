export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roleId: number;
  dateOfBirth: Date;
  createdAt: Date;
  isActive: boolean;
}
