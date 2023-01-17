import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Tasks & Document;

@Schema({ timestamps: true })
export class Tasks {

  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop({ default: false })
  isCompleted?: boolean;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
