import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Language } from 'src/app/core/interfaces/language.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { GetURLdataService } from 'src/app/core/services/toolServices/get-urldata.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languageForm: FormGroup;

  constructor(
    private dataUrl: GetURLdataService,
    private _languageService: LanguagesService,
    private fb: FormBuilder,
  ) { 
    this.languageForm = this.fb.group({
      level: '',
      language: '',
    })
  }

  ngOnInit(): void {       
    console.log(this.dataUrl.id)
  }

  languageAdd(){
    const newLanguage: Language = {
      level: this.languageForm.get('level')?.value,
      language: this.languageForm.get('language')?.value,
      profileId: this.dataUrl.id,
    }
    this._languageService.addLanguage(newLanguage).subscribe((data)=>{
      console.log(data)
    })
  }
}
