import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PluralResult, ApiResponse } from '../../../shared/types/data';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from '../../entity/work.entity';
import { WorkService } from './work.service';

@Controller('api/work')
export class WorkController {
  constructor(private service: WorkService) {}

  @Get('/')
  async getAll(): Promise<ApiResponse<PluralResult<Work>>> {
    return await this.service.getAll();
  }

  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse<Work>> {
    return await this.service.get(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createWorkDto: CreateWorkDto,
  ): Promise<ApiResponse<void>> {
    return await this.service.create(createWorkDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWorkDto: UpdateWorkDto,
  ): Promise<ApiResponse<void>> {
    return await this.service.update(id, updateWorkDto);
  }

  @Delete('/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ApiResponse<void>> {
    return await this.service.delete(id);
  }
}
