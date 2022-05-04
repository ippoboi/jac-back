import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import LocalAuthGuard from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return req.user;
  }
}
