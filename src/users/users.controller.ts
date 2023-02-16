import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-useras.dto';
import { Users } from './schemas/users.schema';
import { UserDto } from './dto/userDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserId(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUsersDto): Promise<Users> {
    return this.usersService.createUser(createUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Users> {
    return this.usersService.removeUserById(id);
  }

  @Put(':id')
  async updateUserId(
    @Body() updateUser: UpdateUsersDto,
    @Param('id') id: string,
  ): Promise<Users> {
    return this.usersService.updateUser(id, updateUser);
  }
  @Get(':id')
  async getUserTask(@Param('id') id: string) {
    return this.usersService.getUserTasks(id);
  }
}
