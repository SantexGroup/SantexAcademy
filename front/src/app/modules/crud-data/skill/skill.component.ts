import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/core/interfaces/skill.interface';
import { SkillService } from 'src/app/core/services/skill.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
  skillForm: FormGroup;
  @Input() profileId?: number;

  skillsList: Skill[] =  [];
  skillId: number = 0;

  constructor(
    private _skillService: SkillService, 
    private fb: FormBuilder,
    private userData: UserDataService,
    public views: NavBarService
    ) {
    this.skillForm = this.fb.group({
      skill: '',
      level: ''
    });
  }
  ngOnInit(): void {
    this.getSkill();
    this.views.title = "Habilidades";
    this.views.plusOne = true;
    this.views.saveButton = false;
  }

  getSkill(){
    this._skillService.getSkillsByUser(this.userData.userId).subscribe((skillList)=>{
      this.skillsList = skillList;
      console.log(skillList)
    })
  }

  addSkillToProfile(): void {
    const newSkill:  Skill = {
      skill: this.skillForm.get('skill')?.value,
      level: this.skillForm.get('level')?.value,
      profileId: this.userData.profileId
    }

    this._skillService.addSkill(newSkill).subscribe((skill) => {
      this.skillsList.push(skill);
    });

    this.skillForm.reset();
  }

  getSelectedSkill(id?:number){
    const index = this.skillsList.findIndex(skill => skill.id === id);
    const elementId = Number(this.skillsList[index].id);
    const element = (this.skillsList[index]);

    this.skillForm.patchValue({
      skill: element.skill,
      level: element.level,
    });

    this.skillId = elementId
  }

  skillUpdate(){
    const newSkill: Skill = {
      skill: this.skillForm.get('skill')?.value,
      level: this.skillForm.get('level')?.value,
    }

    this._skillService.updateSkill(this.skillId, newSkill).subscribe(() => {
      this.getSkill();
    });

    this.skillForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  skillDelete(id?:number){
    const index = this.skillsList.findIndex(skill => skill.id === id);
    const elementId = Number((this.skillsList[index]).id);
    this._skillService.deleteSkill(elementId).subscribe(() => {
      this.skillsList.splice(index, 1);
    });
  }



}
