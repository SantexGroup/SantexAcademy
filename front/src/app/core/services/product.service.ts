import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
@Injectable({
  providedIn: 'root'
})
export class BackServiceService {
  constructor(private _http: ApiService) { }
  private ProductUrl:string ="http://localhost:4001/products/"
//metodo para traer los productos desde el backend
  public getProducts(): Observable<any> {
    return this._http.get(this.ProductUrl);
  }

  //metodo para traer un producto desde el backend 
  public getProduct(id:string): Observable<any> {
    return this._http.get(this.ProductUrl+id);}

  //metodo para agregar un producto en el backend
   public addProduct(product:any): Observable<any> { 
    return this._http.post(this.ProductUrl,product);
   }
   //metodo para actualizar un producto en el backend
   public updateProduct(id:string,product:any): Observable<any> {
    return this._http.put(this.ProductUrl+id, product);
  }
  //metodo para eliminar un producto en el backend
   public deleteProduct(id:string): Observable<any> {
    return this._http.delete(this.ProductUrl+id);
   }
   //metodo para buscar por nombre 
   public getbyName(name:string): Observable<any> {
    return this._http.get(this.ProductUrl+"byname/"+name)
   }
  
}
