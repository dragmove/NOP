import { Controller, Get, Render } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('api/work')
export class WorkController {
  constructor(private service: WorkService) {}

  @Get()
  findAll() {
    return this.service.all();
  }
}
