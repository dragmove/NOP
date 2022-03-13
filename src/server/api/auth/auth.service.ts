import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, PluralResult } from '../../../shared/types/data';
import { User } from '../../entity/user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(
    authCredentialDto: AuthCredentialDto,
  ): Promise<ApiResponse<void>> {
    // create user
    await this.userRepository.createUser(authCredentialDto);
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  /*
  async getAll(): Promise<ApiResponse<PluralResult<User>>> {
    const result = await this.userRepository.getAll();
    return {
      statusCode: 0,
      message: 'ok',
      result: {
        data: result,
        total: result.length,
      },
    };
  }

  async get(id: number): Promise<ApiResponse<User>> {
    const result = await this.userRepository.getUser(id);
    return {
      statusCode: 0,
      message: 'ok',
      result,
    };
  }

  // TODO: update, delete
  */
}
