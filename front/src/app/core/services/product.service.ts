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
    let formD = new FormData();
    formD.append('name', product.name);
    formD.append('quantity', product.quantity);
    formD.append('categories', product.categories);
    formD.append('tipoMaterial', product.tipoMaterial);
    formD.append('image', product.image);
    formD.append('price', product.price);
    formD.append('description', product.description); 
    this._http.setHeader("enctype","multipart/form-data");
    return  this._http.post(this.ProductUrl,formD);
   }
   //metodo para actualizar un producto en el backend
   public updateProduct(id:string,product:any): Observable<any> {
    console.log("producto que llega",product)
    let formD = new FormData();
    formD.append('name', product.name);
    formD.append('quantity', product.quantity);
    formD.append('categories', product.categories);
    formD.append('tipoMaterial', product.tipoMaterial);
    formD.append('image', product.image);
    formD.append('price', product.price);
    formD.append('description', product.description); 
    this._http.setHeader("enctype","multipart/form-data");
    return  this._http.put(this.ProductUrl +"/" +id ,formD);
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
