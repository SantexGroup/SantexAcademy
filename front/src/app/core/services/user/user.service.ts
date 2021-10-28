import { Injectable } from '@angular/core';

import { ApiService } from '../../http/api.service';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  getProfile() {
    return this.apiService.get('users/myInfo');
  }
}
