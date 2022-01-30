import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ViewController } from './view.controller';
import { WorkController } from './work/work.controller';

@Module({
  imports: [],
  controllers: [ViewController, WorkController, ProfileController],
  providers: [],
})
export class ViewModule {}
