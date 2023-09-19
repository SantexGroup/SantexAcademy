import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { Language } from 'src/app/core/interfaces/language.interface';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { Experience } from 'src/app/core/interfaces/experience.interface';
import { ExperiencesService } from 'src/app/core/services/experiences.service';
import { FormationsService } from 'src/app/core/services/formations.service';
import { Formations } from 'src/app/core/interfaces/formation.interface';
import { Reference } from 'src/app/core/interfaces/reference.interface';
import { ReferencesService } from 'src/app/core/services/references.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { Skill } from 'src/app/core/interfaces/skill.interface';

@Component({
  selector: 'app-profiles-four',
  templateUrl: './profiles-four.component.html',
  styleUrls: ['./profiles-four.component.css']
})
export class ProfilesFourComponent implements OnInit {

  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados

  constructor(
    public dataUser: UserDataService,
    public views: NavBarService,    
    private _profileServices: ProfileService,
    private _language: LanguagesService,
    private _experience: ExperiencesService,
    private _formation: FormationsService,
    private _reference: ReferencesService,
    private _skills: SkillService
  ) { }

  languages: Language[] = [];
  experiences: Experience[] = [];
  formations: Formations[] =[];
  references: Reference[] =[];
  skills: Skill[] = [];

  ngOnInit(): void {

    this.languageGet();
    this.getExperience();
    this.getFormations();
    this.getReference();
    this.getSkill();
    console.log(this.dataUser.userId)
    console.log(this.dataUser.profileId)

  }  

  languageGet() {
    this._language.getLanguages(this.dataUser.userId).subscribe((languagesList: Language[]) => {
      this.languages = languagesList;
    })
  }

  getExperience() {
    this._experience.getExperience(this.dataUser.userId).subscribe((experieceList: Experience[])=>{
      this.experiences = experieceList;
    });
  }

  getFormations(){
    this._formation.getFormationByUser(this.dataUser.userId).subscribe((formationList: Formations[]) => {
      this.formations = formationList;
    } )
  }

  getReference() {
    this._reference.getReference(this.dataUser.userId).subscribe((referenceList) => {
      this.references = referenceList;
    });
  }

  getSkill(){
    this._skills.getSkillsByUser(this.dataUser.userId).subscribe((ListSkills)=> {
      this.skills = ListSkills;
      console.log(this.skills)
    })
  }

}
