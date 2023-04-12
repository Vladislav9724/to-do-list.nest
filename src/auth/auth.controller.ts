import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AuthController{
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('load')
  async login (@Request() req){
    return this.authService.loginWithCredentials(req.user)
  }
}