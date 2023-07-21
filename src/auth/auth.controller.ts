import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto/auth.dto';
import { CreateUsersDto } from '../users/dto/create-users.dto';
import { AuthUserResponse } from './dto/auth-user.response';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUsersDto): Promise<CreateUsersDto> {
    return this.authService.registerUsers(dto);
  }

  @Post('login')
  login(@Body() dto: SingInDto): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  test() {
    return true;
  }
}
