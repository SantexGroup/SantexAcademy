import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackServiceService {
  ProductUrl:string ="http://localhost:4001/products/"

  constructor(private _http: HttpClient) { }

//metodo para traer los productos desde el backend
  public getProducts(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'}),
      params: new HttpParams({})
    }
    return this._http.get(this.ProductUrl,httpOptions);
  }

  //metodo para traer un producto desde el backend 
  public getProduct(id:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'}),
      params: new HttpParams({})
    }
    return this._http.get(this.ProductUrl+id,httpOptions);}

  //metodo para agregar un producto en el backend
   public addProduct(product:any): Observable<any> { 
    const httpOptions = {
      headers: new HttpHeaders({'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'}),
      params: new HttpParams({})
    }
    return this._http.post(this.ProductUrl,product,httpOptions);
   }
   //metodo para actualizar un producto en el backend
   public updateProduct(id:string,product:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'}),
      params: new HttpParams({})
    }
    return this._http.put(this.ProductUrl+id,product,httpOptions);
  }
  
}
