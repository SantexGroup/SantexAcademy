import { User } from '../users/users.interface';

export interface UserAuthResponse {
  token: string;
  user: User;
}