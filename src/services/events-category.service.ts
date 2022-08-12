import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsCategoryDto } from '../dto/events-category/create-events-category.dto';
import { UpdateEventsCategoryDto } from '../dto/events-category/update-events-category.dto';
import { eventsCategory } from '../entities/eventsCategory.entity';

@Injectable()
export class EventsCategoryService {
  constructor(
    @InjectRepository(eventsCategory)
    private eventsCategoryRepository: Repository<eventsCategory>,
  ) {}
  create(createEventsCategoryDto: CreateEventsCategoryDto) {
    const newEventCategory = this.eventsCategoryRepository.create(
      createEventsCategoryDto,
    );
    return this.eventsCategoryRepository.save(newEventCategory);
  }

  findAll() {
    return this.eventsCategoryRepository.find();
  }

  findOne(id: number) {
    return this.eventsCategoryRepository.findOne({
      select: [],
      where: { id },
    });
  }

  async update(id: number, updateEventsCategoryDto: UpdateEventsCategoryDto) {
    const eventCategory = await this.findOne(id);

    eventCategory.id = updateEventsCategoryDto.id;
    eventCategory.name = updateEventsCategoryDto.name;

    return this.eventsCategoryRepository.save(eventCategory);
  }

  async remove(id: number) {
    const eventCategory = await this.findOne(id);
    return this.eventsCategoryRepository.remove(eventCategory);
  }
}
