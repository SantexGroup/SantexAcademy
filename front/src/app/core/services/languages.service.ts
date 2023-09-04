import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../interfaces/language.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private api: ApiService) { }

  getLanguages(id:number): Observable<Language[]>{
    return this.api.get<Language[]>('languages/all/${id}'); 
  }

  addLanguage(languege: Language): Observable<Language>{
    return this.api.post<Language>('languages/add', languege);
  }
}
