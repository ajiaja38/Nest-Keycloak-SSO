import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthController } from './jwt-auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      publicKey: `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`,
      verifyOptions: {
        issuer: process.env.ISSUER,
        algorithms: ['RS256'],
      },
    }),
  ],
  controllers: [JwtAuthController],
  providers: [JwtAuthService, JwtStrategy],
})
export class JwtAuthModule {}
