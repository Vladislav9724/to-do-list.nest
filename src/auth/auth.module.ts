import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Users, UserSchema } from "../users/schemas/users.schema";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from "./constant";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: {expiresIn: '60s'}
    }),
    MongooseModule.forFeature([
      {name: Users.name, schema: UserSchema}
    ])
  ],
  exports: [AuthService]
})
export class AuthModule {}
