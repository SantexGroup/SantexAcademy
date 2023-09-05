import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from 'src/app/core/interfaces/language.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  languageForm: FormGroup;

  constructor(
    private dataUser: UserDataService,
    private _languageService: LanguagesService,
    private fb: FormBuilder,
  ) { 
    this.languageForm = this.fb.group({
      level: '',
      language: '',
    })
  }

  languageAdd(){
    const newLanguage: Language = {
      level: this.languageForm.get('level')?.value,
      language: this.languageForm.get('language')?.value,
      profileId: this.dataUser.profileId,
    }
    this._languageService.addLanguage(newLanguage).subscribe((data)=>{
      console.log(data)
    })
  }
}
