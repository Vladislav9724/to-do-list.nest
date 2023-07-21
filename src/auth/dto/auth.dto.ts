import { IsString } from 'class-validator';

export class SingInDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
