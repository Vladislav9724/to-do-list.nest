import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from 'rxjs';
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { jwtConstant } from "./constant";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}


   async canActivate(
    context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)

    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstant.secret
      })
      request['user'] = payload
    }catch (error){
      throw new UnauthorizedException()
    }
    return true;
  }
  private extractTokenFromHeader(request: Request ): string | undefined {
    const [tyre, token] = request.headers.authorization.split("") ?? []
    return tyre === "Bearer" ? token: undefined
  }
}
