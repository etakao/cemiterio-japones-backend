import { Test, TestingModule } from '@nestjs/testing';
import { TumulosService } from './tumulos.service';

describe('TumulosService', () => {
  let service: TumulosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TumulosService],
    }).compile();

    service = module.get<TumulosService>(TumulosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
