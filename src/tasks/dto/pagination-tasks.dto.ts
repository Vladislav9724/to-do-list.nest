import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationTasksDto {
  @IsNumber()
  @Type(() => Number)
  readonly page: number;

  @IsNumber()
  @Type(() => Number)
  @Min(2)
  readonly limit: number;
}
