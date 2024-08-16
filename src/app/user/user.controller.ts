import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interface/User.interface';
import { JwtAuthGuard } from 'src/guard/jwt.auth.guard';
import { RoleGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { ERole } from 'src/utils/types/enum/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(ERole.USER)
  async findAllUserHandler(): Promise<IUser[]> {
    return this.userService.findAllUser();
  }
}
