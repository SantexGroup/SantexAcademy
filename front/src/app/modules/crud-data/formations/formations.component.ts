import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formations } from 'src/app/core/interfaces/formation.interface';
import { FormationsStatus } from 'src/app/core/interfaces/formationsStatus.interface';
import { FormationsTypes } from 'src/app/core/interfaces/formationsTypes.interface';
import { FormationsStatusService } from 'src/app/core/services/formations-status.service';
import { FormationsTypeService } from 'src/app/core/services/formations-type.service';
import { FormationsService } from 'src/app/core/services/formations.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  formationForm: FormGroup;
  editedFormation: Formations | null = null;
  
  constructor(
    private _formationsTypesServices: FormationsTypeService,
    private _formationsStatusServices: FormationsStatusService,
    private _formationsServices: FormationsService,
    private fb: FormBuilder,
    public views: NavBarService,
    public userData: UserDataService,
    public toastr :ToastrService
  ) {
    this.formationForm = this.fb.group({
      statusId: [''],
      typesId: [''],
      title: [''],
      institute: [''],
      startDate: [null],
      endDate: [null],
      description: [''],
    })
  }

  ngOnInit(): void {

    this.userData.checkForm = false;
    
    this.formationsStatusGet();

    this.formationsTypesGet();

    this.userData.getListFormations();
  }

  formationsTypesGet(){
    this._formationsTypesServices.getFormationType().subscribe((typesList: FormationsTypes[])=>{
      this.types = typesList;
    });
  }

  types: FormationsTypes[] = [];

  formationsStatusGet() {
    this._formationsStatusServices.getFormationStatus().subscribe((statusList: FormationsStatus[]) => {
      this.status = statusList;
    });
  }

  status: FormationsStatus[] = [];

  formationAdd() {
    const newFormation: Formations = {
      statusId: this.formationForm.get('statusId')?.value,
      typesId: this.formationForm.get('typesId')?.value,
      title: this.formationForm.get('title')?.value,
      institute: this.formationForm.get('institute')?.value,
      startDate: this.formationForm.get('startDate')?.value,
      endDate: this.formationForm.get('endDate')?.value,
      description: this.formationForm.get('description')?.value,
      profileId: this.userData.profileId
    }
    
    this._formationsServices.addFormation(newFormation).subscribe((formation) => {
      this.userData.formations.push(formation);
      this.toastr.success('Se agrego un nueva formacion', 'FORMACION');
    });
    this.formationForm.reset();
  }

  endDateShow(): boolean {
    return this.formationForm.get('statusId')?.value !== 1;
  }

  deleteFormation(id: number) {
    this._formationsServices.deleteFormation(id).subscribe(() =>{
      this.userData.getListFormations()
      this.toastr.error('Se elimino la formacion');
    })
  }

  editFormation(formation: Formations) {
    this.editedFormation = { ...formation };

    this.formationForm.patchValue({
      statusId: formation.statusId,
      typesId: formation.typesId,
      title: formation.title,
      institute: formation.institute,
      startDate: formation.startDate,
      endDate: formation.endDate,
      description: formation.description,
    });
  }

  // Función para guardar los cambios realizados en el formulario de edición
  saveFormation() {
    if (this.editedFormation) {
      const updatedFormation: Formations = this.formationForm.value;
      updatedFormation.id = this.editedFormation.id;

      this._formationsServices.updateFormation(updatedFormation).subscribe(() => {
        this.userData.getListFormations();
        this.toastr.success('Formacion actualizada', 'FORMACION');
      });

      // this.editedFormation = null; // Restablecer la formación editada
      this.formationForm.reset(); // Restablecer el formulario
    }
  }
}
