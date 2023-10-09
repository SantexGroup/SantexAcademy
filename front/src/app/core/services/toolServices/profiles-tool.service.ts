import { Injectable } from '@angular/core';
import { Optionals } from '../../interfaces/optionlas.interface';
import { Reference } from '../../interfaces/reference.interface';
import { Experience } from '../../interfaces/experience.interface';
import { Formations } from '../../interfaces/formation.interface';
import { Language } from '../../interfaces/language.interface';
import { Skill } from '../../interfaces/skill.interface';
import { Observable, forkJoin } from 'rxjs';
import { ProfileService } from '../profile.service';
import { ProfileExperience,
         ProfileFormation, 
         ProfileLanguage, 
         ProfileOptional, 
         ProfileReference, 
         ProfileSkill } from '../../interfaces/relations.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ProfilesToolService {

  constructor(
    private _profile: ProfileService,
    private toastr: ToastrService
  ) { }

  newOptionals: Optionals[] = [];
  newReferences: Reference[] = [];
  newExperiences: Experience[] = [];
  newFormations: Formations[] = [];
  newLanguages: Language[] = [];
  newSkills: Skill[] = [];

  address!:string;
  
  postAllOptionals(id:number){
    const relationList:Observable<ProfileOptional>[] = this.newOptionals.map(optional => {
      const newRelation: ProfileOptional = {
        profilesId: id,
        optionalsId: optional.id
      }
      return this._profile.postRelationOptional(newRelation)
    })

    forkJoin(relationList).subscribe({
      next: (result: ProfileOptional[]) => {
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar los opcionales', 'OPCIONALES');
      }
    })

  }

  postAllReferences(id:number) {
    const relationList: Observable<ProfileReference>[] = this.newReferences.map(reference => {
      const newRelation: ProfileReference = {
        profilesId: id,
        referencesId : reference.id
      }
      return this._profile.postRelationReference(newRelation);
    });

    forkJoin(relationList).subscribe({
      next: (result: ProfileReference[]) =>{
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar las referencias', 'REFERENCIAS');
      }
    })
  }

  postAllFormations(id:number) {
    const relationList: Observable<ProfileFormation>[] = this.newFormations.map(formation => {
      const newRelation: ProfileFormation = {
        profilesId: id,
        formationsId : formation.id
      }
      return this._profile.postRelationFormation(newRelation);
    });

    forkJoin(relationList).subscribe({
      next: (result: ProfileFormation[]) =>{
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar los formaciones', 'FORMACIONES');
      }
    })
  }

  postAllExperience(id:number) {
    const relationList: Observable<ProfileExperience>[] = this.newExperiences.map(experience => {
      const newRelation: ProfileExperience = {
        profilesId: id,
        experiencesId : experience.id
      }
      return this._profile.postRelationExperience(newRelation);
    });

    forkJoin(relationList).subscribe({
      next: (result: ProfileExperience[]) =>{
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar los experiencias', 'EXPERIENCIAS');
      }
    })
  }

  postAllSkill(id:number) {
    const relationList: Observable<ProfileSkill>[] = this.newSkills.map(skill => {
      const newRelation: ProfileSkill = {
        profilesId: id,
        skillsId: skill.id,
        level: skill.level
      }
      return this._profile.postRelationSkill(newRelation);
    });

    forkJoin(relationList).subscribe({
      next: (result: ProfileSkill[]) =>{
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar los habilidades', 'HABILIDADES');
      }
    })
  }

  postAllLanguage(id:number) {
    const relationList: Observable<ProfileLanguage>[] = this.newLanguages.map(language => {
      const newRelation: ProfileLanguage = {
        profilesId: id,
        languagesId: language.id,
        level: language.level
      }
      return this._profile.postRelationLanguage(newRelation);
    });

    forkJoin(relationList).subscribe({
      next: (result: ProfileLanguage[]) =>{
        return result
      },
      error: () => {
        this.toastr.error('No fue posible guardar los idiomas', 'IDIOMAS');
      }
    })
  }


}
