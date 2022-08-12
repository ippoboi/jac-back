import { Module } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionController } from '../controllers/question.controller';
import { Question } from '../entities/Question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
