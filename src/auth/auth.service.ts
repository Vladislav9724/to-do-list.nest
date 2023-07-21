import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUsersDto } from '../users/dto/create-users.dto';
import { SingInDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from './dto/auth-user.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUsers(dto: CreateUsersDto): Promise<CreateUsersDto> {
    const existUser = await this.usersService.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException('User with this email exist');
    return this.usersService.createUser(dto);
  }

  async loginUser(dto: SingInDto): Promise<AuthUserResponse> {
    const existUser = await this.usersService.findUserByEmail(dto.email);
    if (!existUser) throw new BadRequestException('User not exist');
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (validatePassword) throw new BadRequestException('Wrong data');
    const token = await this.tokenService.generateJwtToken(dto.email);
    const user = await this.usersService.publicUser(dto.email);
    return { ...user, token };
  }
}
