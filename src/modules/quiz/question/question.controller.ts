/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuizService } from '../quiz.service';
import { Question } from './question.entitiy';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}
  @Post()
  async saveQuestion(
    @Body() questionData: CreateQuestionDto,
  ): Promise<Question> {
    const quiz = await this.quizService.getQuizById(questionData.quizId);
    return await this.questionService.createQuestion(questionData, quiz);
  }
}
