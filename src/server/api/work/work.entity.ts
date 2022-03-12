import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkCategory } from '../../../shared/enums/work';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  /*
  @Column()
  titleKor: string;

  @Column()
  subtitle: string;

  @Column()
  description: string;

  @Column()
  url: string;

  // FIXME: create tables
  // heroImages?: string[];
  // thumbnails?: string[];
  // prizes?: string[];
  // ranks?: string[];

  @Column()
  workSummary: string;

  @Column()
  workDetail: string;

  @Column()
  period: string;

  @Column()
  releaseDate: Date;

  @Column()
  copyright: string;

  @Column()
  client: string;

  @Column()
  category: WorkCategory;
  */

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
