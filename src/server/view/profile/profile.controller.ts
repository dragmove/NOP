import { Controller, Get, Render } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  constructor() {}

  @Get()
  @Render('profile')
  public index() {}
}
