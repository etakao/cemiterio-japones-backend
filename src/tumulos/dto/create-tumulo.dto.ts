import { IsString, IsBoolean, IsObject } from 'class-validator';

import { Polygon } from 'geojson';

export class CreateTumuloDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;

  @IsBoolean()
  ocupado: boolean;

  @IsObject()
  geom: Polygon;
}
