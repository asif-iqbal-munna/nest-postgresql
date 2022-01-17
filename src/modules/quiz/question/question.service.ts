/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../quiz.entity';
import { Question } from './question.entitiy';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
