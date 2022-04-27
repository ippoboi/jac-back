import { Module } from '@nestjs/common';
import { RoleLabelsService } from './role-labels.service';
import { RoleLabelsController } from './role-labels.controller';
import { roleLabels } from './entities/roleLabels.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([roleLabels])],
  controllers: [RoleLabelsController],
  providers: [RoleLabelsService],
})
export class RoleLabelsModule {}
