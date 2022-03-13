import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Work } from './work.entity';

@Entity()
export class Prize {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Work, (work) => work.prizes)
  work!: Work;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
