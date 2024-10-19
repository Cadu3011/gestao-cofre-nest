import { Test, TestingModule } from '@nestjs/testing';
import { CofresController } from './cofres.controller';
import { CofresService } from './cofres.service';

describe('CofresController', () => {
  let controller: CofresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CofresController],
      providers: [CofresService],
    }).compile();

    controller = module.get<CofresController>(CofresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
