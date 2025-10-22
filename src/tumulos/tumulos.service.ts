import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository, WhereExpressionBuilder } from 'typeorm';
import { Tumulo } from '../entities/tumulo.entity';
import { CreateTumuloDto } from './dto/create-tumulo.dto';
import { SearchTumuloDto } from './dto/search-tumulo.dto';
import { TumuloListResponseDto } from './dto/tumulo-response.dto';

@Injectable()
export class TumulosService {
  constructor(
    @InjectRepository(Tumulo)
    private readonly tumuloRepository: Repository<Tumulo>,
  ) {}

  async findAll(): Promise<Tumulo[]> {
    return this.tumuloRepository.find();
  }

  async findById(id: number): Promise<Tumulo | null> {
    return this.tumuloRepository.findOne({ where: { id } });
  }

  async findByQuery(searchDto: SearchTumuloDto): Promise<TumuloListResponseDto> {
    const { nome, nomeParente, localOrigem, fileira, page = 1, limit = 10 } = searchDto;
    const skip = (page - 1) * limit;

    const queryBuilder = this.tumuloRepository.createQueryBuilder('tumulo');

    // Aplicar filtros condicionalmente
    if (nome) {
      queryBuilder.andWhere('tumulo.nome ILIKE :nome', { nome: `%${nome}%` });
    }

    if (nomeParente) {
      queryBuilder.andWhere('tumulo.nomeParente ILIKE :nomeParente', { nomeParente: `%${nomeParente}%` });
    }

    if (localOrigem) {
      queryBuilder.andWhere('tumulo.localOrigem ILIKE :localOrigem', { localOrigem: `%${localOrigem}%` });
    }

    if (fileira) {
      queryBuilder.andWhere('tumulo.fileira = :fileira', { fileira });
    }

    // Contar total de registros
    const total = await queryBuilder.getCount();

    // Buscar dados paginados
    const data = await queryBuilder
      .skip(skip)
      .take(limit)
      .orderBy('tumulo.nome', 'ASC')
      .getMany();

    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      data,
      total,
      page,
      limit,
      totalPages,
    };
  }

  async create(createTumuloDto: CreateTumuloDto): Promise<Tumulo> {
    const tumulo = this.tumuloRepository.create(createTumuloDto);
    return this.tumuloRepository.save(tumulo);
  }
}
