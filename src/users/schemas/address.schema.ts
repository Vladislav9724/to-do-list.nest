import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop()
  city: string;

  @Prop()
  street: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
