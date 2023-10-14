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
    return this.api.get<Language[]>(`languages/all/${id}`); 
  }

  addLanguage(language: Language): Observable<Language>{
    return this.api.post<Language>('languages/add', language);
  }

  updateLanguage(id:number, language:Language): Observable<void>{
    return this.api.put<void>(`languages/update/${id}`, language);
  }

  deleteLanguage(id:number): Observable<void>{
    return this.api.delete<void>(`languages/delete/${id}`);
  }
}
