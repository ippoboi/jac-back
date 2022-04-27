import { eventsCategory } from 'src/models/events-category/entities/eventsCategory.entity';

export class CreateEventDto {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
  isActive: boolean;
  placesNb: number;
  adminId: number;
  category: number;
  date: Date;
  createdAt: Date;
}
