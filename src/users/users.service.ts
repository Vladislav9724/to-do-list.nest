import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-useras.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModule: Model<UsersDocument>,
  ) {}

  async getUsers(): Promise<Users[]> {
    return this.userModule.find().exec();
  }
  async getUserById(id: string): Promise<Users> {
    const user = await this.userModule.findById(id);
    if (user) {
      return user;
    }
    throw new BadRequestException('The user is missing');
  }

  async createUser(userDto: CreateUsersDto): Promise<Users> {
    const newUser = new this.userModule(userDto);
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
}
