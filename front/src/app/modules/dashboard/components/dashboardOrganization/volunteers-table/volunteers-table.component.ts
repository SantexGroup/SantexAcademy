import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';
import { OrganizationService } from '../../../services/organization.service';
import { volunteering } from '../../../models/volunteerings.model';

@Component({
  selector: 'app-volunteers-table',
  templateUrl: './volunteers-table.component.html',
  styleUrls: ['./volunteers-table.component.css'],
})
export class VolunteersTableComponent implements OnInit {
  @Input() idOrg: string = '';
  @Output() onEditVolunteering = new EventEmitter<any>();
  volunteerings: volunteering[] = [];
  nameVolunteeringDelete: string = '';
  idVolunteeringDelete: string = '';
  onModalQuestion: boolean = false;
  constructor(private store: Store, private orgServices: OrganizationService) {}

  ngOnInit(): void {
    this.getAllMeVolunteerings();
  }

  getAllMeVolunteerings() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.orgServices.volunteeringByIdOrg(token).subscribe({
          next: (res) => {
            this.volunteerings = res;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  deleteVolunteering(idVol: string, nameVol: string) {
    this.nameVolunteeringDelete = nameVol;
    this.idVolunteeringDelete = idVol;
    this.onModalQuestion = true;
  }

  declineDeleteVolunteering() {
    this.onModalQuestion = !this.onModalQuestion;
  }

  editVolunteering(item: any) {
    this.onEditVolunteering.emit(item);
  }
}
