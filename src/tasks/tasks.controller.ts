import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { Tasks } from './schemas/task.schema';
import { TaskDto } from './dto/task.dto';
import { PaginationTasksDto } from './dto/pagination-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  getAll(
    @Query(ValidationPipe) params: PaginationTasksDto,
  ): Promise<TaskDto[]> {
    const { page, limit } = params;

    return this.tasksService.getAll(page, limit);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<TaskDto> {
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
  ): Promise<TaskDto> {
    return this.tasksService.update(id, updateTasks);
  }
}
