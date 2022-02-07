import { Module } from "@nestjs/common";
import { ProfileController } from "./profile/profile.controller";
import { ServiceController } from "./service/service.controller";
import { ViewController } from "./view.controller";
import { WorkController } from "./work/work.controller";

@Module({
  imports: [],
  controllers: [
    ViewController,
    ProfileController,
    WorkController,
    ServiceController,
  ],
  providers: [],
})
export class ViewModule {}
