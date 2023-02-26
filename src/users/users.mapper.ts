import { UserDto } from './dto/userDto';
import { Users } from './schemas/users.schema';
import { Tasks } from '../tasks/schemas/task.schema';
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
      page: entity.page,
      limit: entity.limit,
    };
  }
}
