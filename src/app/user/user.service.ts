import { Injectable } from '@nestjs/common';
import { IUser } from './interface/User.interface';

@Injectable()
export class UserService {
  private user: IUser[] = [
    {
      id: '1',
      name: 'test',
      email: 'test',
    },
    {
      id: '2',
      name: 'test2',
      email: 'test2',
    },
  ];

  async findAllUser(): Promise<IUser[]> {
    return this.user;
  }
}
