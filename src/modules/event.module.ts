import { Module } from '@nestjs/common';
import { EventService } from '../services/event.service';
import { EventController } from '../controllers/event.controller';
import { Event } from '../entities/Event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), UserModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
