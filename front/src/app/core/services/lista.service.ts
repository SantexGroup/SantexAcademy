import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language.interface';
import { Experience } from '../interfaces/experience.interface';
import { Optionals } from '../interfaces/optionlas.interface';
import { Formations } from '../interfaces/formation.interface';
import { ProfileSkill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root'
})

export class ListaService {

  
  elementsList: any[] = [];


  
  languageList: Language[] = [];
  
  optionalsList: Optionals[] = [];

  experienceList: Experience[] = [];

  formationList: Formations[] = [];

  skillList: ProfileSkill[] = [];

  constructor() {   
  }

  testList(){
    
    if(this.experienceList.length > 0){
      this.elementsList = this.experienceList;
    }

    if(this.languageList.length > 0){
      this.elementsList = this.languageList;
    }
  }

}