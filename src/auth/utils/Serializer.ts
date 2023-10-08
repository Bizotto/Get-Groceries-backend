/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { ValidateUser } from './dto/validate-user-dto';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: ValidateUser, done: Function) {
    console.log('serializeUser', user);
    done(null, user);
  }
  async deserializeUser(payload: ValidateUser, done: Function) {
    const user = await this.authService.findUser(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
