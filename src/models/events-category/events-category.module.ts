import { Module } from '@nestjs/common';
import { EventsCategoryService } from './events-category.service';
import { EventsCategoryController } from './events-category.controller';
import { eventsCategory } from './entities/eventsCategory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([eventsCategory])],
  controllers: [EventsCategoryController],
  providers: [EventsCategoryService],
})
export class EventsCategoryModule {}
