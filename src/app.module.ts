import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

//* MODULES
import { ScraperModule } from './scraper/scraper.module';
import { DataServiceModule } from './data-service/data-service.module';
import { TelegramModule } from './telegram/telegram.module';
import { DatabaseModule } from './database/database.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [HttpModule, ScraperModule, DataServiceModule, TelegramModule, DatabaseModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
