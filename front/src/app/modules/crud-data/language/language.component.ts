import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from 'src/app/core/interfaces/language.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languageForm: FormGroup;

  languageId: number = 0;

  constructor(
    private _languageService: LanguagesService,
    private fb: FormBuilder,
    public userData: UserDataService,
    public views: NavBarService,
    public toastr: ToastrService
  ) {
    this.languageForm = this.fb.group({
      language: '',
      level: '',
    })

  }

  ngOnInit(): void {

    this.userData.checkForm = false;

    this.userData.languageGet();
    
    this.views.changeTitle("Idiomas");
    
    this.views.plusOne = true;
    
    this.views.saveButton = false;

  }

  languageAdd() {
    const newLanguage: Language = {
      language: this.languageForm.get('language')?.value,
      level: this.languageForm.get('level')?.value,
      profileId: this.userData.profileId,
    }
    this._languageService.addLanguage(newLanguage).subscribe((language) => {
      this.userData.languages.push(language);
      this.toastr.success('Se agrego un nuevo idioma', 'IDIOMAS');
    })

    this.userData.languageGet();

    this.languageForm.reset();
  }

  getSelectedLanguage(id?: number) {
    const index = this.userData.languages.findIndex(language => language.id === id);
    const elementId = Number(this.userData.languages[index].id);
    const element = (this.userData.languages[index]);

    this.languageForm.patchValue({
      language: element.language,
      level: element.level,
    });

    this.languageId = elementId
  }

  languageUpdate() {
    const newLanguage: Language = {
      language: this.languageForm.get('language')?.value,
      level: this.languageForm.get('level')?.value,
    }

    this._languageService.updateLanguage(this.languageId, newLanguage).subscribe(() => {
      this.userData.languageGet();
      this.toastr.success('Idioma actualizado', 'IDIOMAS');
    });

    this.languageForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  languageDelete(id?: number) {
    const index = this.userData.languages.findIndex(language => language.id === id);
    const elementId = Number((this.userData.languages[index]).id);
    this._languageService.deleteLanguage(elementId).subscribe(() => {
      this.userData.languages.splice(index, 1);
      this.toastr.error('Se elimino el idioma');
    });
  }

}