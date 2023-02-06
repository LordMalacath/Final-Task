/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { UsersModule } from '../user/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';


@Module({
    imports: [
      UsersModule, 
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '24h'}
      }),
      TypeOrmModule.forFeature([User])
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController]
})
export class AuthModule { }
