import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [CoreModule],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
