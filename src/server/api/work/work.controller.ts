import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './work.model';
import { WorkService } from './work.service';

@Controller('api/work')
export class WorkController {
  constructor(private svc: WorkService) {}

  @Get('/')
  async getAll(): Promise<Work[]> {
    return await this.svc.getAll();
  }

  @Get('/:id')
  async get(@Param('id') id: number | string): Promise<Work> {
    return await this.svc.get(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async create(@Body() createWorkDto: CreateWorkDto): Promise<Work> {
    return await this.svc.create(createWorkDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: number | string,
    @Body() updateWorkDto: UpdateWorkDto,
  ): Promise<Work> {
    return await this.svc.update(id, updateWorkDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number | string): Promise<void> {
    return await this.svc.delete(id);
  }
}
