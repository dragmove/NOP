import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Prize } from './prize.entity';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @Column()
  // titleKor: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  url: string;

  // heroImages?: string[];
  // thumbnails?: string[];

  @OneToMany((type) => Prize, (prize) => prize.work, { eager: true })
  prizes: string[];

  // ranks?: string[];

  // @Column()
  // workSummary: string;

  // @Column()
  // workDetail: string;

  // @Column()
  // period: string;

  // @Column()
  // releaseDate: string;

  // @Column()
  // copyright: string;

  // @Column()
  // client: string;

  // @Column()
  // category: WorkCategory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
