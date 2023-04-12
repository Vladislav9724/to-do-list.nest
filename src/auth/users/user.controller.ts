import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string
  ){
    return this.userService.createUser(username, password)
  }

 @UseGuards(AuthGuard('jwt'))
 @Get()
  async getAllUsers(){
    return this.userService.getUsers()
 }
}