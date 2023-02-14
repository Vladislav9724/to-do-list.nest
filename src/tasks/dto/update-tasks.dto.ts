import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class UpdateTasksDto {
  @IsOptional()
  @IsString({ message: 'Must be a string type' })
  @Length(4, 50, { message: 'Not less than 4 not more than 16' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Must be a string type' })
  @Length(2, 70, { message: 'Not less than 2 not more than 7' })
  readonly body?: string;

  @IsOptional()
  @IsBoolean({ message: 'Must be a boolean type' })
  readonly isCompleted?: boolean;
}
