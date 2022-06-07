import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../../config/constants';

export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.at_secret,
    });
  }

  async validate(payload: any) {
    // console.log(payload);
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
