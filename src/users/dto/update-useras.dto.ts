import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserAddressDto } from './user-address.dto';

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

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserAddressDto)
  readonly address: UserAddressDto;
}
