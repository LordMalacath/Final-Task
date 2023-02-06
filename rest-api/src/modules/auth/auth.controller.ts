/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
    ) { }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(@Request() req: any) {
    return this.authService.signin(req.user)
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout() {
    return
  }

  @Get('initial')
  @UseGuards(JwtAuthGuard)
  initialData(
    @Req() req,
  ) {
    return this.authService.getInitialData(req.user.id);
  }
}