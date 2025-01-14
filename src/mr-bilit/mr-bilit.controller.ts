import { Controller, Get } from '@nestjs/common';
import { MrBilitService } from './mr-bilit.service';

@Controller('mr-bilit')
export class MrBilitController {
  constructor(private readonly mrBilitService: MrBilitService) {}

  @Get()
  getAll() {
    return this.mrBilitService.scrapeWebsite('https://mrbilit.com/train-ticket');
  }
}
