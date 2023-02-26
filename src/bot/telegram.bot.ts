import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramBot {
  private readonly bot: Telegraf;

  constructor(private readonly configService: ConfigService) {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
    this.bot.start((ctx) => {
      ctx.reply('Hello! This is your bot!');
    });
  }

  public async startPolling() {
    this.bot.launch();
  }
}
