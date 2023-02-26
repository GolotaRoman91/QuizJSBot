import { Module } from '@nestjs/common';
import { TelegramBot } from './bot/telegram.bot';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, TelegramBot],
})
export class AppModule {}
