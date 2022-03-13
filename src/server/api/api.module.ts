import { Module } from '@nestjs/common';
import { WorkModule } from './work/work.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, WorkModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
