import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class roleLabels {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
