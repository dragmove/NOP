import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, PluralResult } from '../../../shared/types/data';
import { AccessTokenGuard } from '../../common/guards';
import { Work } from '../../entity/work.entity';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { WorkService } from './work.service';

@Controller('api/work')
export class WorkController {
  constructor(private service: WorkService) {}

  @Get('/')
  getAll(): Promise<ApiResponse<PluralResult<Work>>> {
    return this.service.getAll();
  }

  @Get('/:id')
  get(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse<Work>> {
    return this.service.get(id);
  }

  @Post('/')
  @UseGuards(AccessTokenGuard)
  create(@Body() createWorkDto: CreateWorkDto): Promise<ApiResponse<void>> {
    return this.service.create(createWorkDto);
  }

  @Patch('/:id')
  @UseGuards(AccessTokenGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWorkDto: UpdateWorkDto,
  ): Promise<ApiResponse<void>> {
    return this.service.update(id, updateWorkDto);
  }

  @Delete('/:id')
  @UseGuards(AccessTokenGuard)
  delete(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse<void>> {
    return this.service.delete(id);
  }
}
