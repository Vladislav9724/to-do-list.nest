import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument, Tasks } from './schemas/task.schema';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { Users, UsersDocument } from '../users/schemas/users.schema';
import { TasksMapper } from './tasks.mapper';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Tasks.name) private taskModel: Model<TaskDocument>,
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}

  async getAll(): Promise<TaskDto[]> {
    const tasks = await this.taskModel.find().populate('author').exec();
    return tasks.map(TasksMapper.toDto);
  }

  async getById(id: string): Promise<TaskDto> {
    const task = await this.taskModel.findById(id).populate('author');
    if (task) {
      const taskMapper = TasksMapper.toDto(task);
      return taskMapper;
    }
    throw new BadRequestException('No task');
  }

  async create(taskDto: CreateTasksDto): Promise<Tasks> {
    const user = await this.userModel.findById(taskDto.userId);
    if (user) {
      const newTask = new this.taskModel({
        ...taskDto,
        author: user,
      });

      return newTask.save();
    }
    throw new BadRequestException('No task');
  }

  async remove(id: string): Promise<Tasks> {
    const taskRemove = await this.taskModel.findByIdAndRemove(id);
    if (taskRemove) {
      return taskRemove;
    }
    throw new BadRequestException('No task');
  }

  async update(id: string, taskDto: UpdateTasksDto): Promise<TaskDto> {
    const taskUpdate = await this.taskModel.findByIdAndUpdate(id, taskDto, {
      new: true,
    });
    if (taskUpdate) {
      return TasksMapper.toDto(taskUpdate);
    }
    throw new BadRequestException('no task');
  }
}
