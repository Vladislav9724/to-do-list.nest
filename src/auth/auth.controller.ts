import { Controller, HttpCode, HttpStatus, Post, Body, Get, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SingInDto } from "./dto/auth.dto";
import { AuthGuard } from "./auth.guard";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() singInDto: SingInDto){
    return this.authService.singIn(singInDto.name, singInDto.password)
  }
  @UseGuards(AuthGuard)
  @Get("/test")
  test(){
    return {user: 'name 1'}
  }
}
