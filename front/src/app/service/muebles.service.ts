import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MueblesService {   
    mueblesFiltrados:any []= []
    muebleArray:any [] = [
              {
                  "nombre": "Silla Plastica",
                  "precio": 600,
                  "cantidad": 370,
                  "detalle": "Silla plastica con apoya brazo y respaldar recto"
              },
              {
            
                  "nombre": "Mesa Rectangular Larga",
                  "precio": 3600,
                  "cantidad": 130,
                  "detalle": "Mesa de madera rectangular con capacidad para 14 personas"
              },
              {
            
                  "nombre": "Sillon tipo Futon",
                  "precio": 2600,
                  "cantidad": 75,
                  "detalle": "Sillon tipo futon amplio"
              },
              {
            
                  "nombre": "Mesa pequeña",
                  "precio": 1100,
                  "cantidad": 60,
                  "detalle": "Mesa pequeña apoya vasos"
              },
              {
            
                  "nombre": "Mesa Circular Plastica",
                  "precio": 1900,
                  "cantidad": 150,
                  "detalle": "Mesa circular plastica con capacidad para 6 personas"
              },
              {
            
                  "nombre": "Silla de Aluminio",
                  "precio": 890,
                  "cantidad": 460,
                  "detalle": "Silla de alumnio con apoyo y respaldar de goma espuma tapizado"
              },
              {
            
                  "nombre": "Mesa de Vidrio",
                  "precio": 4000,
                  "cantidad": 120,
                  "detalle": "Mesa de vidrio con base metalica de tipo cromada"
              },
              {
            
                  "nombre": "Sillon de Descanso",
                  "precio": 2400,
                  "cantidad": 50,
                  "detalle": "Sillon amplio, con almohadones de plumas de ganzo"
              }
    ]

  constructor() { }
  
  filtrarMuebles(value:string){
    this.muebleArray=this.muebleArray
    console.log('Antes de filtrar', this.muebleArray)
    this.mueblesFiltrados = this.muebleArray.filter((mueble) => mueble.nombre.toLowerCase().includes(value.toLowerCase()));
    console.log('Despues de filtrar', this.mueblesFiltrados)
} 
 
  
}
