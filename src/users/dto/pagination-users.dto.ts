import { IsNumber, IsOptional } from 'class-validator';

export class PaginationUsersDto {
  @IsNumber()
  @IsOptional()
  readonly page: number;

  @IsNumber()
  @IsOptional()
  readonly limit: number;
}
