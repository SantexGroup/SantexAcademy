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

  constructor(
    private dataUser: UserDataService,
    private _languageService: LanguagesService,
    private fb: FormBuilder,
    public views: NavBarService
  ) {
    this.languageForm = this.fb.group({
      level: '',
      language: '',
    })
  }

  ngOnInit(): void {
    this.languageGet();
  }

  languageGet() {
    this._languageService.getLanguages(this.dataUser.userId).subscribe((languagesList: Language[]) => {
      this.languages = languagesList;
      console.log(this.languages);
    })
  }

  languageAdd() {
    const newLanguage: Language = {
      level: this.languageForm.get('level')?.value,
      Language: {
        language: this.languageForm.get('language')?.value,
      },
      profileId: this.dataUser.profileId,
    }
    this._languageService.addLanguage(newLanguage).subscribe(() => {
      this.languages.push(newLanguage);
    })
    this.languageForm.reset();
  }

}


