import { IsNumber } from 'class-validator';

export class TaskDto {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly isCompleted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  @IsNumber()
  @IsNumber()
  readonly page: number;

  @IsNumber()
  @IsNumber()
  readonly limit: number;
}
