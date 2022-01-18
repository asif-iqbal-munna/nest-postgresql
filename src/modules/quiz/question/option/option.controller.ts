/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateOptionDto } from '../../dto/create-option.dto';
import { QuestionService } from '../question.service';
import { OptionService } from './option.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  async saveQuestionOption(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );
    return this.optionService.makeOption(createOption, question);
  }
}
