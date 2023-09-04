import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { ProfileSkill } from '../interfaces/skill.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private api: ApiService) { }

  addSkill(skill: string, level: number, profileId: number): Observable<ProfileSkill> {
    const body = {
      skill: skill,
      level: level,
      profileId: profileId
    };

    return this.api.post<ProfileSkill>('skills/add', body);
  }

  getSkillsByUser() {
    this.api.get('/skills/').subscribe((data) => {
      console.log(data);
    });
  }

  getSkillById() {
    throw new Error("Esta función no está implementada todavía.");
  }

  updateSkill() {
    throw new Error("Esta función no está implementada todavía.");
  }

  deleteSkill() {
    throw new Error("Esta función no está implementada todavía.");
  }
}
