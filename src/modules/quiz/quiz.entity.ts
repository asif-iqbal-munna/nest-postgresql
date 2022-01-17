/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Question } from './question/question.entitiy';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
