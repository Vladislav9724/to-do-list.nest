import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users, UserSchema } from './schemas/users.schema';
import { Address, AddressSchema } from "./schemas/address.schema";
import { Tasks, TasksSchema } from "../tasks/schemas/task.schema";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema },
      { name: Address.name, schema: AddressSchema},
      { name: Tasks.name, schema: TasksSchema}
    ]),
  ],
})
export class UsersModule {}
