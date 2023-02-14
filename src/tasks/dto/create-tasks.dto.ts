import {
  IsBoolean,
  IsMongoId,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateTasksDto {
  @IsOptional()
  readonly id: string;

  @IsString({ message: 'Must be a string type' })
  @Length(4, 15, { message: 'Not less than 4 not more than 16' })
  readonly title: string;

  @IsString({ message: 'Must be a string type' })
  @Length(2, 300, { message: 'Not less than 2 not more than 300' })
  readonly body: string;

  @IsOptional()
  @IsBoolean({ message: 'Must be a boolean type' })
  readonly isCompleted?: boolean;

  @IsMongoId()
  readonly userId: string;
}
