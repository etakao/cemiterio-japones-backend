import { Test, TestingModule } from '@nestjs/testing';
import { TumulosController } from './tumulos.controller';

describe('TumulosController', () => {
  let controller: TumulosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TumulosController],
    }).compile();

    controller = module.get<TumulosController>(TumulosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
