import { Module } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { RoleController } from '../controllers/role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/entities/Role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
