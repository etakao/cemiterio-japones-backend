import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Polygon } from 'geojson';

@Entity('tumulos')
export class Tumulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: '',
  })
  fotoUrl?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  ordemNb?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  nome?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  kanji?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  idade?: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  dataNascimento?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  dataFalecimento?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  localOrigem?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  nomeParente?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  grauParentesco?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  parenteKanji?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  genero?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  codLivro?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  livro?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  ordem?: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  fileira?: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: 'Sem dados',
  })
  posicao?: number;

  @Column({ type: 'geometry', spatialFeatureType: 'Polygon', srid: 4326 })
  geom: Polygon;
}
