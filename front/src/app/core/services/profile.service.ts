import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Profile } from '../interfaces/profile.interface';
import { ProfileExperience, 
         ProfileFormation, 
         ProfileLanguage, 
         ProfileOptional, 
         ProfileReference, 
         ProfileSkill } from '../interfaces/relations.interface';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(
    private api: ApiService,
    ) {}

  getProfile(id: Number): Observable<Profile[]> {
    return this.api.get<Profile[]>(`profiles/todos/${id}`);
  }

  deleteProfile(id?:number):Observable<Profile>{
    return this.api.delete<Profile>(`profiles/delete/${id}`)
  }

  postProfie(profile: Profile): Observable<Profile>{
    return this.api.post<Profile>('profiles/create', profile);
  }

  /* Tablas Intermedias */
  postRelationExperience(experienceRelation: ProfileExperience): Observable<ProfileExperience>{
    return this.api.post<ProfileExperience>('profiles/relation/experience', experienceRelation)
  }

  postRelationFormation(formationRelation: ProfileFormation): Observable<ProfileFormation>{
    return this.api.post<ProfileFormation>('profiles/relation/formation', formationRelation)
  }

  postRelationOptional(optionalRelation: ProfileOptional): Observable<ProfileOptional>{
    return this.api.post<ProfileOptional>('profiles/relation/optional', optionalRelation)
  }

  postRelationReference(referenceRelation: ProfileReference): Observable<ProfileReference>{
    return this.api.post<ProfileReference>('profiles/relation/reference', referenceRelation)
  }

  postRelationSkill(skillRelation: ProfileSkill): Observable<ProfileSkill>{
    return this.api.post<ProfileSkill>('profiles/relation/skill', skillRelation)
  }

  postRelationLanguage(languageRelation: ProfileLanguage): Observable<ProfileLanguage>{
    return this.api.post<ProfileLanguage>('profiles/relation/language', languageRelation)
  }

}
