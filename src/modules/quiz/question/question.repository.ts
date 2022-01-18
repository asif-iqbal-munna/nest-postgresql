/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Question } from './question.entitiy';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {}
