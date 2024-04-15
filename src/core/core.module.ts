import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public/',
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
  ],
  exports: [ServeStaticModule, ScheduleModule, ConfigModule],
  providers: [],
})
export class CoreModule {}
