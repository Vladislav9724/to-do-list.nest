import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument, Tasks } from './schemas/task.schema';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { CreateUsersDto } from '../users/dto/create-users.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Tasks.name) private taskModel: Model<TaskDocument>,
  ) {}

  async getAll(): Promise<Tasks[]> {
    return this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Tasks> {
    const task = await this.taskModel.findById(id);
    if (task) {
      return task;
    }
    throw new BadRequestException('No task');
  }

  async create(taskDto: CreateTasksDto): Promise<Tasks> {
    const newTask = new this.taskModel({
      ...taskDto,
    });
    return newTask.save();
  }

  async remove(id: string): Promise<Tasks> {
    const taskRemove = await this.taskModel.findByIdAndRemove(id);
    if (taskRemove) {
      return taskRemove;
    }
    throw new BadRequestException('No task');
  }

  async update(id: string, taskDto: UpdateTasksDto): Promise<Tasks> {
    const taskUpdate = await this.taskModel.findByIdAndUpdate(id, taskDto, {
      new: true,
    });
    if (taskUpdate) {
      return taskUpdate;
    }
    throw new BadRequestException('no task');
  }
}
