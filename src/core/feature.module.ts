import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  exports: [],
  providers: [MailModule],
})
export class FeatureModule {}
