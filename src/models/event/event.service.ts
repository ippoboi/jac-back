import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/decorators/roles.decorator';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entity/Event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}
  @Roles()
  create(createEventDto: CreateEventDto) {
    const newEvent = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(newEvent);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: number) {
    return this.eventRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);

    event.category = updateEventDto.category;
    event.createdAt = updateEventDto.createdAt;
    event.placesNb = updateEventDto.placesNb;
    event.title = updateEventDto.title;
    event.date = updateEventDto.date;
    event.isOpen = updateEventDto.isOpen;
    event.isActive = updateEventDto.isActive;
    event.description = updateEventDto.description;

    return this.eventRepository.save(event);
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    return this.eventRepository.remove(event);
  }
}
