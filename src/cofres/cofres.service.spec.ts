import { Test, TestingModule } from '@nestjs/testing';
import { CofresService } from './cofres.service';

describe('CofresService', () => {
  let service: CofresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CofresService],
    }).compile();

    service = module.get<CofresService>(CofresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
