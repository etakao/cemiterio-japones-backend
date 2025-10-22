import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TumulosModule } from './tumulos/tumulos.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TumulosModule,
  ],
})
export class AppModule {}
