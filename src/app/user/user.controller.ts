import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interface/User.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  findAllUserHandler(): Promise<IUser[]> {
    return this.userService.findAllUser();
  }
}
