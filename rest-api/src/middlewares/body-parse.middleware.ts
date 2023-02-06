/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class bodyParser implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body = {};

    if (req.headers['content-type'] === 'application/json') {
      let data = '';
      
      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        try {
          req.body = JSON.parse(data);
        } catch (error) {
          console.log(error)
        } finally {
          next();
        }
      });
    } else {
      next();
    }
  }
}