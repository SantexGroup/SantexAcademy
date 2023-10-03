import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProfilesToolService } from 'src/app/core/services/toolServices/profiles-tool.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    public userData: UserDataService,
    private fb: FormBuilder,
    private _profileService: ProfileService,
    private _profileTool: ProfilesToolService
  ) { 
    this.profileForm = this.fb.group({
      userId: this.userData.userId,
      profileName: ''
    });
  }

  ngOnInit(): void {
    this.userData.getMyOptionals();
    this.userData.languageGet();
    this.userData.getExperience();
    this.userData.getListFormations();
    this.userData.getReference();
    this.userData.getSkill();
  }
   check:boolean = false;

  list!:any;

  hasCheck(event: any){
    this.check = event.checked;
  }

  getExperience(id?: number){
    const index = this.userData.experiences.findIndex(experience => experience.id === id)
    const element = this.userData.experiences[index]
    if(this._profileTool.newExperiences.includes(element)){
      const newIndex = this._profileTool.newExperiences.indexOf(element);
      this._profileTool.newExperiences.splice(newIndex,1)
    }else{
      this._profileTool.newExperiences.push(element)
    }
  }

  getOptional(id?: number){
    const index = this.userData.optionals.findIndex(option => option.id === id)
    const element = this.userData.optionals[index]
    if(this._profileTool.newOptionals.includes(element)){
      const newIndex = this._profileTool.newOptionals.indexOf(element);
      this._profileTool.newOptionals.splice(newIndex,1)
    }else{
      this._profileTool.newOptionals.push(element)
    }
  }

  getReference(id?: number){
    const index = this.userData.references.findIndex(reference => reference.id === id)
    const element = this.userData.references[index]
    if(this._profileTool.newReferences.includes(element)){
      const newIndex = this._profileTool.newReferences.indexOf(element);
      this._profileTool.newReferences.splice(newIndex,1)
    }else{
      this._profileTool.newReferences.push(element)
    }
  }

  getFormation(id?: number){
    const index = this.userData.formations.findIndex(formation => formation.id === id)
    const element = this.userData.formations[index]
    if(this._profileTool.newFormations.includes(element)){
      const newIndex = this._profileTool.newFormations.indexOf(element);
      this._profileTool.newFormations.splice(newIndex,1)
    }else{
      this._profileTool.newFormations.push(element)
    }
  }

  getSkill(id?: number){
    const index = this.userData.skills.findIndex(skill => skill.id === id)
    const element = this.userData.skills[index]
    if(this._profileTool.newSkills.includes(element)){
      const newIndex = this._profileTool.newSkills.indexOf(element);
      this._profileTool.newSkills.splice(newIndex,1)
    }else{
      this._profileTool.newSkills.push(element)
    }
  }

  getLanguage(id?: number){
    const index = this.userData.languages.findIndex(language => language.id === id)
    const element = this.userData.languages[index]
    if(this._profileTool.newLanguages.includes(element)){
      const newIndex = this._profileTool.newLanguages.indexOf(element);
      this._profileTool.newLanguages.splice(newIndex,1)
    }else{
      this._profileTool.newLanguages.push(element)
    }
  }


  profilePost(){

    const newProfile: Profile = {
      userId: this.userData.userId,
      profileName: this.profileForm.get('profileName')?.value
    }

    this._profileService.postProfie(newProfile).subscribe({
      next: (data) => {
        if(data.id != undefined){
          this._profileTool.postAllSkill(data.id);
          this._profileTool.postAllOptionals(data.id)
          this._profileTool.postAllReferences(data.id);
          this._profileTool.postAllExperience(data.id);
          this._profileTool.postAllFormations(data.id);
          this._profileTool.postAllLanguage(data.id);
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}