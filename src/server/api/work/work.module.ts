import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkController } from './work.controller';
import { WorkRepository } from './work.repository';
import { WorkService } from './work.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkRepository])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
