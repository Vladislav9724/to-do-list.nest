import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { Tasks } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  getAll(): Promise<Tasks[]> {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Tasks> {
    return this.tasksService.getById(id);
  }

  @Post()
  create(@Body() createTasksDto: CreateTasksDto): Promise<Tasks> {
    return this.tasksService.create(createTasksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Tasks> {
    return this.tasksService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateTasks: UpdateTasksDto,
    @Param('id') id: string,
  ): Promise<Tasks> {
    return this.tasksService.update(id, updateTasks);
  }
}
