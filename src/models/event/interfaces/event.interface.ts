import { eventsCategoryEnum } from 'src/entity/eventsCategoryEnum.enum';

export interface Event {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
  isActive: boolean;
  placesNb: number;
  adminId: number;
  category: eventsCategoryEnum;
  date: Date;
  createdAt: Date;
}
