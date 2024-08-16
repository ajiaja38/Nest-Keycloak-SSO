import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../../interface/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `-----BEGIN PUBLIC KEY-----\n${configService.get<string>('PUBLIC_KEY')}\n-----END PUBLIC KEY-----`,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any): Promise<IJwtPayload> {
    if (!payload) throw new UnauthorizedException('Invalid Token');

    const { name, email, resource_access } = payload;

    return {
      name,
      email,
      roles: resource_access[Object.keys(resource_access)[0]].roles,
    };
  }
}
