import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  constructor(
    public userData: UserDataService
  ) { }

  ngOnInit(): void {
    this.userData.getMyOptionals();
    this.userData.languageGet();
    this.userData.getExperience();
    this.userData.getListFormations();
    this.userData.getReference();
    this.userData.getSkill();
  }

}
