import { Injectable } from '@nestjs/common';
import { CreateEventsCategoryDto } from './dto/create-events-category.dto';
import { UpdateEventsCategoryDto } from './dto/update-events-category.dto';

@Injectable()
export class EventsCategoryService {
  create(createEventsCategoryDto: CreateEventsCategoryDto) {
    return 'This action adds a new eventsCategory';
  }

  findAll() {
    return `This action returns all eventsCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventsCategory`;
  }

  update(id: number, updateEventsCategoryDto: UpdateEventsCategoryDto) {
    return `This action updates a #${id} eventsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventsCategory`;
  }
}
