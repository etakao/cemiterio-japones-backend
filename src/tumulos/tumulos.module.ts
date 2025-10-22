import { Module } from '@nestjs/common';
import { TumulosService } from './tumulos.service';
import { TumulosController } from './tumulos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tumulo } from 'src/entities/tumulo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tumulo])],
  providers: [TumulosService],
  controllers: [TumulosController],
})
export class TumulosModule {}
