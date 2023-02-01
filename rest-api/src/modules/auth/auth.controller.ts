/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(@Request() req: any) {
    return this.authService.signin(req.user)
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout() {
  }
}