import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { IJwtPayload } from 'src/app/auth/interface/jwt-payload.interface';

export const UserDec: (...dataOrPipes: unknown[]) => ParameterDecorator =
  createParamDecorator(
    (data: unknown, context: ExecutionContext): IJwtPayload => {
      const req = context.switchToHttp().getRequest();
      return req.user as IJwtPayload;
    },
  );
