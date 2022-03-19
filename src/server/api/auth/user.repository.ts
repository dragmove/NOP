import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { name, nickname, email, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({
      name,
      nickname,
      email,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (err) {
      if (err.errno === 1062) {
        // code: 'ER_DUP_ENTRY'
        throw new ConflictException('Duplicate nickname or email.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async updateRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<true | never> {
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = refreshToken
      ? await bcrypt.hash(refreshToken, salt)
      : null;

    const result = await this.update(userId, {
      refreshToken: hashedRefreshToken,
    });
    if (result.affected <= 0) {
      throw new NotFoundException(`Can't find data with id: ${userId}`);
    }

    return true;
  }

  async getUserById(id: number): Promise<User> {
    const user: User = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user: User = await this.findOne({
      email,
    });
    if (!user) {
      throw new NotFoundException(`Can't find data with email: ${email}`);
    }

    return user;
  }
}
