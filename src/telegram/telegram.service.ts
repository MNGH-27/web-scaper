import { Injectable, OnModuleInit } from '@nestjs/common';
import type TelegramBotType from 'node-telegram-bot-api';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: TelegramBotType;

  onModuleInit() {
    const token = process.env.TELEGRAM_BOT_TOKEN;

    //check if the token is set
    if (!token) {
      console.error('TELEGRAM_BOT_TOKEN is not set');
      return;
    }

    this.bot = new TelegramBot(token, { polling: true });

    this.bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;

      // Respond to the user
      this.bot.sendMessage(chatId, `You said: ${text}`);
    });

    console.log('Telegram bot is running');
  }

  sendMessage(chatId: number, message: string) {
    this.bot.sendMessage(chatId, message);
  }
}
