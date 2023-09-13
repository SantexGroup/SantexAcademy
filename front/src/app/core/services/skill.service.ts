import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Skill } from '../interfaces/skill.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private api: ApiService) { }

  addSkill(skill: Skill): Observable<Skill> {
    return this.api.post<Skill>('skills/add', skill);
  }

  getSkillsByUser(id:number):Observable<Skill[]> {
    return this.api.get<Skill[]>(`skills/all/${id}`);
  }

  updateSkill(id: number, skill: Skill): Observable<void> {
    return this.api.put<void>(`skills/update/${id}`, skill)
  }

  deleteSkill(id: number): Observable<void> {
    return this.api.delete<void>(`skills/delete/${id}`)
  }
}
