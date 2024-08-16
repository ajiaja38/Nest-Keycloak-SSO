import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interface/User.interface';
import { JwtAuthGuard } from 'src/guard/jwt.auth.guard';
import { RoleGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { ERole } from 'src/utils/types/enum/role.enum';
import { UserDec } from 'src/decorator/user.decorator';
import { IJwtPayload } from '../auth/interface/jwt-payload.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(ERole.ADMIN)
  async findAllUserHandler(@UserDec() user: IJwtPayload): Promise<IUser[]> {
    console.log(user);
    return this.userService.findAllUser();
  }
}
