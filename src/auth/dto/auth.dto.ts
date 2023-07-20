import { IsString } from "class-validator";

export class SingInDto {

  username: string;

  @IsString()
  password: string;
}
