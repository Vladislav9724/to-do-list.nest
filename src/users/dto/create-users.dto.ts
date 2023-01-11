import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString({ message: 'Must be a string type' })
  readonly name: string;
  @IsString({ message: 'Must be a string type' })
  readonly lastName: string;
  @IsNumber()
  readonly age: number;
  @IsEmail()
  readonly email: string;
}
