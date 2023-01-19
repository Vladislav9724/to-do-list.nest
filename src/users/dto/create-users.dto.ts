import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UserAddressDto } from './user-address.dto';
import { Type } from 'class-transformer';

export class CreateUsersDto {
  @IsString({ message: 'Must be a string type' })
  readonly name: string;

  @IsString({ message: 'Must be a string type' })
  readonly lastName: string;

  @IsNumber()
  readonly age: number;

  @IsEmail()
  readonly email: string;
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserAddressDto)
  readonly address: UserAddressDto;
}
