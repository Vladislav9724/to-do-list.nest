import { TaskDto } from '../../tasks/dto/task.dto';

export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly tasks: TaskDto[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
