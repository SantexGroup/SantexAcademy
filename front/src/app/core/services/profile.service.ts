import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Profile } from '../interfaces/profile.interface';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private api: ApiService) {}

  getProfile(id: Number): Observable<Profile[]> {
    return this.api.get<Profile[]>(`profiles/${id}`);
  }

}
