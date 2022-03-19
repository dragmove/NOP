import { AuthGuard } from '@nestjs/passport';

export class AccessTokenGuard extends AuthGuard('access-token-strategy') {
  constructor() {
    super();
  }
}

export class RefreshTokenGuard extends AuthGuard('refresh-token-strategy') {
  constructor() {
    super();
  }
}
