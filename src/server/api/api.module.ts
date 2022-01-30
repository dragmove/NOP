import { Module } from '@nestjs/common';
import { WorkModule } from './work/work.module';

@Module({
  imports: [WorkModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
