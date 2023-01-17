import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Tasks } from '../../tasks/schemas/task.schema';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true })
export class Users {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop({ type: [Types.ObjectId], ref: Tasks.name })
  tasks: Tasks[];
}

export const UserSchema = SchemaFactory.createForClass(Users);
