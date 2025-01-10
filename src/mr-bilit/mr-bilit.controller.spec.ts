import { Test, TestingModule } from '@nestjs/testing';
import { MrBilitController } from './mr-bilit.controller';

describe('MrBilitController', () => {
  let controller: MrBilitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MrBilitController],
    }).compile();

    controller = module.get<MrBilitController>(MrBilitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
