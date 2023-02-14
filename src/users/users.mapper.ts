import { UserDto } from './dto/userDto';
import { Users } from './schemas/users.schema';
import { Tasks } from '../tasks/schemas/task.schema';
import { TaskDto } from '../tasks/dto/task.dto';
import { TasksMapper } from '../tasks/tasks.mapper';

export class UsersMapper {
  static toDto(entity: Users, tasks: Tasks[]): UserDto {
    return {
      id: entity._id,
      name: entity.name,
      lastName: entity.lastName,
      tasks: tasks.map((task) => TasksMapper.toDto(task)),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toCreateEntity(user: Users): Users {
    return Object.assign(new Users(), { user: user });
  }

  static toUpdateEntity(entity: Users): UserDto {
    return Object.assign(entity);
  }
}
