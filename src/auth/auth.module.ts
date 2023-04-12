import { Module } from "@nestjs/common";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { LoadStrategy } from "./load.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { UserController } from "./users/user.controller";


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: {expiresIn: 'JWT_EXPIRES_IN'},
    })
  ],
  providers: [AuthService, LoadStrategy, JwtStrategy],
  controllers: [AuthController, UserController],
  exports: [AuthService],
})

export class AuthModule{}