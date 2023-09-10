import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reference } from '../interfaces/reference.interface';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(
    private api: ApiService
  ) { }

  addReference(reference: Reference): Observable<Reference> {
    return this.api.post<Reference>('references/add', reference);
  }

  getReference(id:number): Observable<Reference[]>{
    return this.api.get<Reference[]>(`references/all/${id}`);
  }

  updateReference(id:number, referece:Reference): Observable<void>{
    return this.api.put<void>(`references/update/${id}`, referece);
  }

  deleteReference(id:number): Observable<void>{
    return this.api.delete<void>(`references/delete/${id}`);
  }

}
