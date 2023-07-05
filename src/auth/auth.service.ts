import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Auth, AuthDocument } from "./schemas/auth.schemas";
import { Model } from "mongoose";
import { Users, UsersDocument } from "../users/schemas/users.schema";
import { UsersModule } from "../users/users.module";
import { TaskDocument, Tasks } from "../tasks/schemas/task.schema";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModule: Model<AuthDocument>,
    @InjectModel(Users.name) private readonly userModule: Model<UsersDocument>,
    @InjectModel(Tasks.name) private readonly tasksModule: Model<TaskDocument>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  async singIn (name: string, password: string): Promise<any>{
    const user = await this.usersService.findOne(name)
    if (user.password !== password) {
      throw new UnauthorizedException()
    }
    const payload = {name: user.name, sub: user.userId}
    const tokenAccess = await  this.jwtService.signAsync(payload,{expiresIn: '15m'})
    return {token: tokenAccess}
  }

}
