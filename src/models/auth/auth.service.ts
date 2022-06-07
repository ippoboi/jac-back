import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logout(id: number) {
    await this.userService.updateRtToken(id, null);
  }

  async refreshToken(id: number, rt: string) {
    const user = await this.userService.findOne(id);

    if (!user) throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, user.token);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    return this.generateToken(user);
  }

  async validateUserCreds(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new BadRequestException();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async generateToken(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };
    const [at, rt] = [
      this.jwtService.sign(payload, {
        expiresIn: 60 * 15,
        secret: jwtConstants.at_secret,
      }),
      this.jwtService.sign(payload, {
        expiresIn: '1d',
        secret: jwtConstants.at_secret,
      }),
    ];
    this.userService.updateRtToken(user.id, rt);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
