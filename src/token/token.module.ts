import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstant } from '../auth/constant';

@Module({
  providers: [TokenService, JwtService],
  exports: [TokenService],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class TokenModule {}
