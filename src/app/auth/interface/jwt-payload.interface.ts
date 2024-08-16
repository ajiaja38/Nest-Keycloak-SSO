import { ERole } from 'src/utils/types/enum/role.enum';

export interface IJwtPayload {
  id: string;
  name: string;
  email: string;
  roles: ERole[];
}
