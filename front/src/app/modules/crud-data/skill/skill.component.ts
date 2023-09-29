import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/core/interfaces/skill.interface';
import { SkillService } from 'src/app/core/services/skill.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillForm: FormGroup;
  @Input() profileId?: number;

  skillId: number = 0;

  constructor(
    private _skillService: SkillService,
    private fb: FormBuilder,
    public userData: UserDataService,
    public views: NavBarService,
    public toastr: ToastrService
  ) {
    this.skillForm = this.fb.group({
      skill: '',
      level: ''
    });

  }


  ngOnInit(): void {

    this.userData.checkForm = false;

    this.userData.getSkill();

    this.views.changeTitle("Habilidades");

    this.views.plusOne = true;

    this.views.saveButton = false;
    
  }

  addSkillToProfile(): void {
    const newSkill: Skill = {
      skill: this.skillForm.get('skill')?.value,
      level: this.skillForm.get('level')?.value,
      profileId: this.userData.profileId
    }

    this._skillService.addSkill(newSkill).subscribe((skill) => {
      this.userData.skills.push(skill);
      this.toastr.success('Se agrego un nueva habilidad', 'HABILIDADES');
    });

    this.skillForm.reset();
  }

  getSelectedSkill(id?: number) {
    const index = this.userData.skills.findIndex(skill => skill.id === id);
    const elementId = Number(this.userData.skills[index].id);
    const element = (this.userData.skills[index]);

    this.skillForm.patchValue({
      skill: element.skill,
      level: element.level,
    });

    this.skillId = elementId
  }

  skillUpdate() {
    const newSkill: Skill = {
      skill: this.skillForm.get('skill')?.value,
      level: this.skillForm.get('level')?.value,
    }

    this._skillService.updateSkill(this.skillId, newSkill).subscribe(() => {
      this.userData.getSkill();
      this.toastr.success('Se actualizo la habilidad', 'HABILIDADES');
    });

    this.skillForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  skillDelete(id?: number) {
    const index = this.userData.skills.findIndex(skill => skill.id === id);
    const elementId = Number((this.userData.skills[index]).id);
    this._skillService.deleteSkill(elementId).subscribe(() => {
      this.userData.skills.splice(index, 1);
      this.toastr.error('Se elimino la habilidad');
    });
  }

}
