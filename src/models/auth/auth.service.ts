import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUserCreds(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);

    console.log('test');
    if (!user) throw new BadRequestException();

    console.log('test2');
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }
}
