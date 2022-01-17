import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question/question.controller';
import { QuestionRepository } from './question/question.repository';
import { QuestionService } from './question/question.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
