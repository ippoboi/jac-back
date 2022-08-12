import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { RoleModule } from './role.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RoleModule],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
