import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from "./constant";

import { Auth, AuthSchema } from "./schemas/auth.schemas";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    MongooseModule.forFeature([
      {name: Auth.name, schema: AuthSchema}
    ]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: {expiresIn: '60m'}
    }),
  ],
  exports: [AuthService]
})
export class AuthModule {}
