import { TaskDto } from './dto/task.dto';
import { Tasks } from './schemas/task.schema';
import { CreateTasksDto } from './dto/create-tasks.dto';

export class TasksMapper {
  static toDto(entity: Tasks): TaskDto {
    return {
      id: entity._id,
      title: entity.title,
      body: entity.body,
      isCompleted: entity.isCompleted,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toCreateEntity(task: Tasks): Tasks & { task: Tasks } {
    return Object.assign(new Tasks(), { task: task });
  }

  static toUpdateEntity(entity: Tasks): Tasks {
    return Object.assign(entity);
  }
}
