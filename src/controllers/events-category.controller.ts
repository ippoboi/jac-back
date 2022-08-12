import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsCategoryService } from '../services/events-category.service';
import { CreateEventsCategoryDto } from '../dto/events-category/create-events-category.dto';
import { UpdateEventsCategoryDto } from '../dto/events-category/update-events-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('events-category')
@Controller('events-category')
export class EventsCategoryController {
  constructor(private readonly eventsCategoryService: EventsCategoryService) {}

  @Post()
  create(@Body() createEventsCategoryDto: CreateEventsCategoryDto) {
    return this.eventsCategoryService.create(createEventsCategoryDto);
  }

  @Get()
  findAll() {
    return this.eventsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventsCategoryDto: UpdateEventsCategoryDto,
  ) {
    return this.eventsCategoryService.update(+id, updateEventsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsCategoryService.remove(+id);
  }
}
