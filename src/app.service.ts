import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello  Mohkh World!';
  }
}
//npm run start:dev