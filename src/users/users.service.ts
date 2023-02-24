import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-useras.dto';
import { TaskDocument, Tasks } from '../tasks/schemas/task.schema';
import { Address, AddressDocument } from './schemas/address.schema';
import { UsersMapper } from './users.mapper';
import { UserDto } from './dto/userDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly userModule: Model<UsersDocument>,
    @InjectModel(Address.name)
    private readonly addressModule: Model<AddressDocument>,
    @InjectModel(Tasks.name) private readonly tasksModule: Model<TaskDocument>,
  ) {}

  async getUsers({ limit, page }): Promise<UserDto[]> {
    const skip = limit * page;
    const users = await this.userModule
      .find()
      .sort({ _id: 1 })
      .skip(skip)
      .limit(limit)
      .populate('address');
    const arrUsersTasks = [];
    for await (const user of users) {
      const tasks = await this.tasksModule.find({ author: user }).exec();
      const userMapper = UsersMapper.toDto(user, tasks);
      arrUsersTasks.push(userMapper);
    }

    return arrUsersTasks;
  }

  async getUserById(id: string): Promise<UserDto> {
    const user = await this.userModule.findById(id).populate('address');
    if (user) {
      const task = await this.tasksModule.find({ author: user }).exec();
      const userDto = UsersMapper.toDto(user, task);
      return userDto;
    }
    throw new BadRequestException('The user is missing');
  }

  async createUser(userDto: CreateUsersDto): Promise<Users> {
    const newUser = new this.userModule({
      ...userDto,
    });

    return newUser.save();
  }

  async removeUserById(id: string): Promise<Users> {
    const userRemove = await this.userModule.findByIdAndRemove(id);
    if (userRemove) {
      return userRemove;
    }
    throw new BadRequestException('The user is missing');
  }

  async updateUser(id: string, userDto: UpdateUsersDto): Promise<Users> {
    const userUpdate = await this.userModule.findByIdAndUpdate(id, userDto, {
      new: true,
    });
    if (userUpdate) {
      return userUpdate;
    }
    throw new BadRequestException('The user is missing');
  }

  async getUserTasks(id: string) {
    await this.userModule.find().populate('tasks', null, Tasks.name).exec();
  }
}
