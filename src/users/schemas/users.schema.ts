import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from './address.schema';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

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

  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
