import { IsNumber, IsOptional } from "class-validator";

export class TaskDto {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly isCompleted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  @IsNumber()
  @IsOptional()
  readonly page: number;

  @IsNumber()
  @IsOptional()
  readonly limit: number;
}
