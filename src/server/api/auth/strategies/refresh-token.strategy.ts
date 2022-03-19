import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../../entity/user.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh-token-strategy',
) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'rt-secret', // FIXME: move secret
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: User): Promise<Partial<User>> {
    console.log('req.authorization :', req.get('authorization'));

    const refreshToken: string = req
      .get('authorization')
      .replace('Bearer', '')
      .trim();

    return {
      ...payload,
      refreshToken,
    };
  }
}
