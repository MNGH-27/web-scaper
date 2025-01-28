import { Module } from '@nestjs/common';
import { DataServiceService } from './data-service.service';

@Module({
  providers: [DataServiceService],
})
export class DataServiceModule {}
