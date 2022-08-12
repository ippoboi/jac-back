import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/question/create-question.dto';
import { UpdateQuestionDto } from '../dto/question/update-question.dto';
import { Question } from '../entities/Question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  create(createQuestionDto: CreateQuestionDto) {
    const newQuestion = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(newQuestion);
  }

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.findOne(id);

    question.title = updateQuestionDto.title;
    question.answer = updateQuestionDto.answer;

    return this.questionRepository.save(question);
  }

  async remove(id: number) {
    const question = await this.findOne(id);
    return this.questionRepository.remove(question);
  }
}
