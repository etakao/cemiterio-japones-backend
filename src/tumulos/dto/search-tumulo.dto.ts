import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchTumuloDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  nomeParente?: string;

  @IsOptional()
  @IsString()
  localOrigem?: string;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  fileira?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value) || 1)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value) || 10)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;
}
