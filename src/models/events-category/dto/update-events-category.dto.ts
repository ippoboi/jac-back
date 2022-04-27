import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsCategoryDto } from './create-events-category.dto';

export class UpdateEventsCategoryDto extends PartialType(CreateEventsCategoryDto) {}
