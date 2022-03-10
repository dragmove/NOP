import { Controller, Get, Render } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('api/work')
export class WorkController {
  constructor(private service: WorkService) {}

  @Get()
  findAll() {
    return this.service.getAll();
  }
}

// FIXME: 인프런 강의 CRUD 구현 참고하여, DTO 생성 진행
