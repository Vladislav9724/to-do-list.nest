import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Schema as mongooseSchema } from 'mongoose';
import { Address, AddressSchema } from './address.schema';
import { Transform, Type } from 'class-transformer';

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

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(Users);
