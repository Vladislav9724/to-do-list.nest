import { TaskDto } from './dto/task.dto';
import { Tasks } from './schemas/task.schema';

export class TasksMapper {
  static toDto(entity: Tasks): TaskDto {
    return {
      id: entity._id,
      title: entity.title,
      body: entity.body,
      isCompleted: entity.isCompleted,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      page: entity.page,
      limit: entity.limit,
    };
  }
}
