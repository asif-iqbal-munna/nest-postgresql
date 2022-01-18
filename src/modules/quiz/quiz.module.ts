import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionController } from './question/option/option.controller';
import { OptionRepository } from './question/option/option.repository';
import { OptionService } from './question/option/option.service';
import { QuestionController } from './question/question.controller';
import { QuestionRepository } from './question/question.repository';
import { QuestionService } from './question/question.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
