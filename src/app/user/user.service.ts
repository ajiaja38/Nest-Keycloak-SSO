import { Injectable } from '@nestjs/common';
import { IUser } from './interface/User.interface';
import { MessageService } from '../message/message.service';

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

  constructor(private messageService: MessageService) {}

  async findAllUser(): Promise<IUser[]> {
    this.messageService.setMessage('Find all user successfully');
    return this.user;
  }
}
