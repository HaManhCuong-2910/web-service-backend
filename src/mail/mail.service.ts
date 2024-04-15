import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  async sendMail(body) {
    console.log('body', body);
    return {
      status: 'oke',
    };
  }
}
