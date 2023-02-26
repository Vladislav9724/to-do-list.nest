import { TaskDto } from '../../tasks/dto/task.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly tasks: TaskDto[];
  readonly createdAt: Date;
  readonly updatedAt: Date;

  @IsNumber()
  @IsOptional()
  readonly page: number;

  @IsNumber()
  @IsOptional()
  readonly limit: number;
}
