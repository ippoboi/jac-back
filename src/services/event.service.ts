import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/decorators/roles.decorator';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../dto/event/create-event.dto';
import { UpdateEventDto } from '../dto/event/update-event.dto';
import { Event } from '../entities/Event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

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

  async delete(id: number) {
    if (this.findOne(id)) {
      return this.eventRepository.delete(id);
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        message:
          'Event not found in database. Check if the id you entered is correct',
      });
    }
  }
}
