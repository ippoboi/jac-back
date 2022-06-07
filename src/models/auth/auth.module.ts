import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import LocalStrategy from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from './at-jwt.strategy';
import { jwtConstants } from '../../config/constants';
import { RtStrategy } from './rt-jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AtStrategy, RtStrategy],
})
export class AuthModule {}
