import { ERole } from 'src/utils/types/enum/role.enum';

export interface IJwtPayload {
  name: string;
  email: string;
  roles: ERole[];
}
