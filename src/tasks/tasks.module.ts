import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';
import { Tasks, TasksSchema } from './schemas/task.schema';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
  ],
})
export class TasksModule {}
