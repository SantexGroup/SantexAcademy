import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Language } from 'src/app/core/interfaces/language.interface';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { Skill } from 'src/app/core/interfaces/skill.interface';
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

  elementId?: number;

  hide: boolean = false;

  constructor(
    public userData: UserDataService,
    private fb: FormBuilder,
    private _profileService: ProfileService,
    private _profileTool: ProfilesToolService,
    private toastr: ToastrService
  ) {
    this.profileForm = this.fb.group({
      userId: this.userData.userId,
      profileName: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.userData.getMyOptionals();
    this.userData.languageGet();
    this.userData.getExperience();
    this.userData.getListFormations();
    this.userData.getReference();
    this.userData.getSkill();
    this.userData.getPersonal();
    this._profileTool.newExperiences = [];
    this._profileTool.newFormations = [];
    this._profileTool.newOptionals = [];
    this._profileTool.newReferences = [];
    this._profileTool.newLanguages = [];
    this._profileTool.newSkills = [];
  }

  filter(element:Profile){
    const skillList: Skill[] = []
    element.Skills!.forEach((elementSkill) => {
      const filterSkill = {
        id: elementSkill.id!,
        skill: elementSkill.skill!,
        level: elementSkill.ProfileSkill?.level!
      }
      skillList.push(filterSkill)
    })

    const languageList: Language[] = []
    element.Languages!.forEach((elementLanguage) => {
      const filterLanguage = {
        id: elementLanguage.id!,
        language: elementLanguage.language!,
        level: elementLanguage.ProfileLanguage?.level!
      }
      languageList.push(filterLanguage)
    })
    this._profileTool.newLanguages = languageList
    this._profileTool.newSkills = skillList
  }

  selectedProfile(element: Profile) {
    this.hide = true;
    this.filter(element)       
    this._profileTool.newExperiences = element.Experiences!
    this._profileTool.newFormations = element.Formations!
    this._profileTool.newOptionals = element.Optionals!
    this._profileTool.address = element.Optionals![0].address
    this._profileTool.newReferences = element.References!
  }

  reset(){
    this._profileTool.newExperiences = [];
    this._profileTool.newFormations = [];
    this._profileTool.newOptionals = [];
    this._profileTool.newReferences = [];
    this._profileTool.newLanguages = [];
    this._profileTool.newSkills = [];
  }


  getExperience(id?: number) {
    const index = this.userData.experiences.findIndex(experience => experience.id === id)
    const element = this.userData.experiences[index]
    if (this._profileTool.newExperiences.includes(element)) {
      const newIndex = this._profileTool.newExperiences.indexOf(element);
      this._profileTool.newExperiences.splice(newIndex, 1)
    } else {
      this._profileTool.newExperiences.push(element)
    }
  }

  getOptional(id?: number) {
    const index = this.userData.optionals.findIndex(option => option.id === id)
    const element = this.userData.optionals[index]
    if (this._profileTool.newOptionals.includes(element)) {
      const newIndex = this._profileTool.newOptionals.indexOf(element);
      this._profileTool.newOptionals.splice(newIndex, 1);
      this.userData.getMyOptionals();
    } else {
      this._profileTool.newOptionals.push(element)
      this._profileTool.address = element.address
      this.userData.optionals = this._profileTool.newOptionals;
    }
  }

  getReference(id?: number) {
    const index = this.userData.references.findIndex(reference => reference.id === id)
    const element = this.userData.references[index]
    if (this._profileTool.newReferences.includes(element)) {
      const newIndex = this._profileTool.newReferences.indexOf(element);
      this._profileTool.newReferences.splice(newIndex, 1)
    } else {
      this._profileTool.newReferences.push(element)
    }
  }

  getFormation(id?: number) {
    const index = this.userData.formations.findIndex(formation => formation.id === id)
    const element = this.userData.formations[index]
    if (this._profileTool.newFormations.includes(element)) {
      const newIndex = this._profileTool.newFormations.indexOf(element);
      this._profileTool.newFormations.splice(newIndex, 1)
    } else {
      this._profileTool.newFormations.push(element)
    }
  }

  getSkill(id?: number) {
    const index = this.userData.skills.findIndex(skill => skill.id === id)
    const element = this.userData.skills[index]
    if (this._profileTool.newSkills.includes(element)) {
      const newIndex = this._profileTool.newSkills.indexOf(element);
      this._profileTool.newSkills.splice(newIndex, 1)
    } else {
      this._profileTool.newSkills.push(element)
    }
  }

  getLanguage(id?: number) {
    const index = this.userData.languages.findIndex(language => language.id === id)
    const element = this.userData.languages[index]
    if (this._profileTool.newLanguages.includes(element)) {
      const newIndex = this._profileTool.newLanguages.indexOf(element);
      this._profileTool.newLanguages.splice(newIndex, 1)
    } else {
      this._profileTool.newLanguages.push(element)
    }
  }


  profilePost() {

    const newProfile: Profile = {
      userId: this.userData.userId,
      profileName: this.profileForm.get('profileName')?.value
    }

    this._profileService.postProfie(newProfile).subscribe({
      next: (data) => {
        if (data.id != undefined) {
          this._profileTool.postAllSkill(data.id);
          this._profileTool.postAllOptionals(data.id)
          this._profileTool.postAllReferences(data.id);
          this._profileTool.postAllExperience(data.id);
          this._profileTool.postAllFormations(data.id);
          this._profileTool.postAllLanguage(data.id);
        }
        this.toastr.success('Su perfil se guardo correctamente', 'PERFILES')
      },
      error: () => {
        this.toastr.error('El perfil no se pudo guardar', 'PERFILES')
      }
    })
  }
}