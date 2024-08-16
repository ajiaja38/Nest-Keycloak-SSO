import { Controller } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';

@Controller('jwt-auth')
export class JwtAuthController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}
}
