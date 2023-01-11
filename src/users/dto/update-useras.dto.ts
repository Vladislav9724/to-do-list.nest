import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUsersDto {
  @IsOptional()
  @IsString({ message: 'Must be a string type' })
  readonly name?: string;
  @IsOptional()
  @IsString({ message: 'Must be a string type' })
  readonly lastName?: string;
  @IsOptional()
  @IsNumber()
  readonly age?: number;
  @IsOptional()
  @IsEmail()
  readonly email?: string;
}
