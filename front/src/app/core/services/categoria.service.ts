import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http: ApiService) { }
  private Url:string ="http://localhost:4001/categories/"

  //metodo para traer las categorias 
   public getCategories(): Observable<any> {
    return this._http.get(this.Url);
   }

   //traer los productos de una categoria
   public getProductsByCategory(id:any): Observable<any> {
    return this._http.post(this.Url+"getByids",id);
   }

   //guardar una categoria nueva
   public postCategory(category:any): Observable<any> {
    return this._http.post(this.Url,category);
   }

   //borrar una categoria
    public deleteCategory(id:string): Observable<any> {
      return this._http.delete(this.Url+id);
   }

   //editar una categoria
   public putCategory(id:string,category:any): Observable<any> {
    return this._http.put(this.Url+id,category);
   }




}
