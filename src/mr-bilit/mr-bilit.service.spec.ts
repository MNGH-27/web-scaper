import { Test, TestingModule } from '@nestjs/testing';
import { MrBilitService } from './mr-bilit.service';

describe('MrBilitService', () => {
  let service: MrBilitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MrBilitService],
    }).compile();

    service = module.get<MrBilitService>(MrBilitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
