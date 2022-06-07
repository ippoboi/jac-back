import { IsBoolean, IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { eventsCategory } from 'src/models/events-category/entities/eventsCategory.entity';
import { IsNull } from 'typeorm';

export class CreateEventDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  isOpen: boolean;

  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  placesNb: number;

  @IsNotEmpty()
  adminId: number;

  @IsString()
  @IsNotEmpty()
  category: number;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  startHour: Date;

  @IsNotEmpty()
  endHour: Date;

  @IsEmpty()
  createdAt: Date;
}
