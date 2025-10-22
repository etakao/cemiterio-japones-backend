import { Tumulo } from '../../entities/tumulo.entity';

export class TumuloResponseDto {
  success: boolean;
  data: Tumulo | Tumulo[] | null;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
}

export class TumuloListResponseDto {
  success: boolean;
  data: Tumulo[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
