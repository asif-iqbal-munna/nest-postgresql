/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/modules/quiz/question.entitiy';
import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'munna6069',
  database: 'quiz',
  entities: [Quiz, Question],
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
};
