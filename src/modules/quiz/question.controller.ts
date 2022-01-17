/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entitiy';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post()
  async saveQuestion(
    @Body() questionData: CreateQuestionDto
  ): Promise<Question> {
    return await this.questionService.createQuestion(questionData);
  }
}
