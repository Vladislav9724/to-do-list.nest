import { IsString } from 'class-validator';

export class UserAddressDto {
  @IsString()
  city: string;
  @IsString()
  street: string;
}
