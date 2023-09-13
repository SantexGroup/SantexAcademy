import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from 'src/app/core/interfaces/language.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languageForm: FormGroup;

  languages: Language[] = [];

  languageId: number = 0;

  constructor(
    private dataUser: UserDataService,
    private _languageService: LanguagesService,
    private fb: FormBuilder,
    public views: NavBarService,
  ) {
    this.languageForm = this.fb.group({
      language: '',
      level: '',
    })
  }

  ngOnInit(): void {
    this.languageGet();

    this.views.plusOne = true;
    this.views.saveButton = false;
    
  }

  languageGet() {
    this._languageService.getLanguages(this.dataUser.userId).subscribe((languagesList: Language[]) => {
      this.languages = languagesList;
      console.log(this.languages)
    })
  }

  languageAdd() {
    const newLanguage: Language = {
      language: this.languageForm.get('language')?.value,
      level: this.languageForm.get('level')?.value,
      profileId: this.dataUser.profileId,
    }
    this._languageService.addLanguage(newLanguage).subscribe((language) => {
      this.languages.push(language);
    })

    this.languageGet();

    console.log(this.languages);

    this.languageForm.reset();
  }

  getSelectedLanguage(id?:number){
    const index = this.languages.findIndex(language => language.id === id);
    const elementId = Number(this.languages[index].id);
    const element = (this.languages[index]);

    this.languageForm.patchValue({
      language: element.language,
      level: element.level,
    });

    this.languageId = elementId
    console.log(this.languageId)
  }

  languageUpdate(){
    const newLanguage: Language = {
      language: this.languageForm.get('language')?.value,
      level: this.languageForm.get('level')?.value,

    }

    this._languageService.updateLanguage(this.languageId, newLanguage).subscribe(() => {
      this.languageGet();
    });

    this.languageForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  languageDelete(id?:number){
    const index = this.languages.findIndex(language => language.id === id);
    console.log("index:", index)
    const elementId = Number((this.languages[index]).id)
    console.log("Elemento", elementId)
    this._languageService.deleteLanguage(elementId).subscribe(() => {
      this.languages.splice(index, 1)
    });
  }

}