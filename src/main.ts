import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBot } from './bot/telegram.bot';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const bot = app.get(TelegramBot);
  await bot.startPolling();
}
bootstrap();
