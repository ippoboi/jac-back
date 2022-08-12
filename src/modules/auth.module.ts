import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import LocalStrategy from '../guards/local.strategy';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from '../guards/at-jwt.strategy';
import { jwtConstants } from '../config/constants';
import { RtStrategy } from '../guards/rt-jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AtStrategy, RtStrategy],
})
export class AuthModule {}
