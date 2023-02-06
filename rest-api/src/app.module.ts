/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bodyParser } from './middlewares/body-parse.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/companies/companies.module';
import { UsersModule } from './modules/user/users.module';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    CompanyModule
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(bodyParser)
      .forRoutes({
        path: '*', 
        method: RequestMethod.POST,
      },
      {
        path: '*',
        method: RequestMethod.PUT,
      }
      )
  }
}
