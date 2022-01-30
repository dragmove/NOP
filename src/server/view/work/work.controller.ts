import { Controller, Get, Render } from '@nestjs/common';

@Controller('work')
export class WorkController {
  constructor() {}

  @Get()
  @Render('work')
  public index() {}
}
