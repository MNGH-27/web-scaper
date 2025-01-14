import { Module } from '@nestjs/common';
import { MrBilitController } from './mr-bilit/mr-bilit.controller';
import { MrBilitService } from './mr-bilit/mr-bilit.service';
import { MrBilitModule } from './mr-bilit/mr-bilit.module';

@Module({
  imports: [MrBilitModule],
  controllers: [MrBilitController],
  providers: [MrBilitService],
})
export class AppModule {}
