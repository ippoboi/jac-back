import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  id: number;

  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  answer: string;
}
