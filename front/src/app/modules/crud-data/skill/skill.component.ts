import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skillForm: FormGroup;
  @Input() profileId?: number;

  constructor(private service: SkillService, private fb: FormBuilder,) {
    this.skillForm = this.fb.group({
      skill: '',
      level: ''
    });
  }

  addSkillToProfile(): void {
    const skill = this.skillForm.get('skill')?.value;
    const level = this.skillForm.get('level')?.value;

    console.log(skill, level, this.profileId);

    this.service.addSkill(skill, level, this.profileId!).subscribe((data) => {
      console.log(data);
    });

    this.skillForm.reset();
  }

}
