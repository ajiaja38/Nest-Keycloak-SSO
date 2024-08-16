import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { ERole } from 'src/utils/types/enum/role.enum';

export const Roles: (...roles: ERole[]) => CustomDecorator<string> = (
  ...roles: ERole[]
) => SetMetadata('roles', roles);
