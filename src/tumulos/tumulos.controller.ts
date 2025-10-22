import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { TumulosService } from './tumulos.service';
import { CreateTumuloDto } from './dto/create-tumulo.dto';
import { SearchTumuloDto } from './dto/search-tumulo.dto';
import { TumuloResponseDto, TumuloListResponseDto } from './dto/tumulo-response.dto';
import { Tumulo } from 'src/entities/tumulo.entity';

@Controller('tumulos')
export class TumulosController {
  constructor(private readonly tumulosService: TumulosService) {}

  @Get()
  async find(@Query() searchDto: SearchTumuloDto): Promise<TumuloListResponseDto> {
    return this.tumulosService.findByQuery(searchDto);
  }

  @Get('all')
  async findAll(): Promise<TumuloResponseDto> {
    const data = await this.tumulosService.findAll();
    return {
      success: true,
      data,
      message: 'Todos os túmulos encontrados',
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<TumuloResponseDto> {
    const data = await this.tumulosService.findById(Number(id));
    return {
      success: true,
      data,
      message: data ? 'Túmulo encontrado' : 'Túmulo não encontrado',
    };
  }

  @Post()
  async create(@Body() createTumuloDto: CreateTumuloDto): Promise<TumuloResponseDto> {
    const data = await this.tumulosService.create(createTumuloDto);
    return {
      success: true,
      data,
      message: 'Túmulo criado com sucesso',
    };
  }
}
