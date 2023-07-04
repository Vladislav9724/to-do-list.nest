import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
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
