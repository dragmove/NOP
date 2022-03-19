import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../../entity/user.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'access-token-strategy',
) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret', // FIXME: move secret
    });
  }

  async validate(payload: Partial<User>): Promise<Partial<User>> {
    console.log('[access-token.strategy] payload :', payload);
    return payload;
  }
}
