import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, PluralResult } from '../../../shared/types/data';
import { User } from '../../entity/user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signUp(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<ApiResponse<void>> {
    return await this.service.signUp(authCredentialDto);
  }

  /*
  @Get('/')
  async getAll(): Promise<ApiResponse<PluralResult<User>>> {
    return await this.service.getAll();
  }

  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse<User>> {
    return await this.service.get(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createWorkDto: CreateWorkDto,
  ): Promise<ApiResponse<void>> {
    return await this.service.create(createWorkDto);
  }

  /*
  // TODO: update, delete
  */
}
