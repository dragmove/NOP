// Ref: https://www.youtube.com/watch?v=uAKzFhE3rxU

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthTokens } from '../../../shared/types/auth';
import { ApiResponse } from '../../../shared/types/data';
import { AccessTokenGuard, RefreshTokenGuard } from '../../common/guards';
import { User } from '../../entity/user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  signUpLocal(@Body() dto: AuthCredentialDto): Promise<ApiResponse<void>> {
    return this.service.signUpLocal(dto);
  }

  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  signInLocal(
    @Body() dto: AuthCredentialDto,
  ): Promise<ApiResponse<AuthTokens>> {
    return this.service.signInLocal(dto);
  }

  @UseGuards(AccessTokenGuard)
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request): Promise<ApiResponse<void>> {
    const user: Partial<User> = req.user;
    return this.service.logout(user.id);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('/refresh-tokens')
  @HttpCode(HttpStatus.OK)
  refreshTokens(@Req() req: Request): Promise<ApiResponse<AuthTokens>> {
    // TODO: 테스트시 Bearer {refreshToken} 전달 필요
    const user: Partial<User> = req.user;
    return this.service.refreshTokens(user.id, user.refreshToken);
  }
}
