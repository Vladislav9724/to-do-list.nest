import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Type } from 'class-transformer';
import { Users } from '../../users/schemas/users.schema';

export type TaskDocument = Tasks & Document;

@Schema({ timestamps: true })
export class Tasks {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop({ default: false })
  isCompleted?: boolean;

  @Prop({ type: mongooseSchema.Types.ObjectId, ref: Users.name })
  @Type(() => Users)
  author: Users;

  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
