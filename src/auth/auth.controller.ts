import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Login' };
  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'Redirect' };
  }
}
