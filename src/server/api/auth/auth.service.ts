import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { AuthTokens } from '../../../shared/types/auth';
import { ApiResponse } from '../../../shared/types/data';
import { User } from '../../entity/user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUpLocal(dto: AuthCredentialDto): Promise<ApiResponse<void>> {
    await this.repository.createUser(dto);
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  async signInLocal(dto: AuthCredentialDto): Promise<ApiResponse<AuthTokens>> {
    const { email, password } = dto;
    const user: User = await this.repository.getUserByEmail(email);

    const isMatchPassword: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isMatchPassword) {
      throw new UnauthorizedException('Login failed.');
    }

    const tokens: AuthTokens = await this.getTokens({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
    });
    await this.repository.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      statusCode: 0,
      result: { ...tokens },
      message: 'ok',
    };
  }

  async logout(userId: number): Promise<ApiResponse<void>> {
    const user: User = await this.repository.getUserById(userId);
    await this.repository.updateRefreshToken(user.id, null);

    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  async refreshTokens(
    userId: number,
    refreshToken: string,
  ): Promise<ApiResponse<AuthTokens>> {
    const user: User = await this.repository.getUserById(userId);

    const isMatchRefreshToken: boolean = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!isMatchRefreshToken) {
      throw new UnauthorizedException('Refresh tokens failed.');
    }

    const tokens: AuthTokens = await this.getTokens({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
    });
    await this.repository.updateRefreshToken(userId, tokens.refreshToken);

    return {
      statusCode: 0,
      result: { ...tokens },
      message: 'ok',
    };
  }

  async getTokens(payload: Partial<User>): Promise<AuthTokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: 'at-secret', // FIXME:
        expiresIn: 60 * 15, // 15m
      }),
      this.jwtService.signAsync(payload, {
        secret: 'rt-secret', // FIXME:
        expiresIn: 60 * 60 * 24, // 1d
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
