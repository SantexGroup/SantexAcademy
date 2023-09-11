import { Injectable } from '@angular/core';
import { Course } from '../core/interface/courses.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  courses: any = [];

  fechaFinalizacion: Date;

  private endpoint = 'http://localhost:4001/courses'; //creamos una variable para el endpoint de los cursos

  constructor(private http: HttpClient) {
    this.fechaFinalizacion = new Date();
  } //creamos una variable para el modulo de HttpClient

  getPosts():Observable<Course[]> { //creamos un metodo que va a devolver un observable con el array de cursos

    return this.http.get<Course[]>(this.endpoint) //hacemos un get del endpoint que será el array de cursos

  }

  getCoursesDetail(id: number):Observable<Course[]> { 

    const url = `${this.endpoint}/${id}`

    return this.http.get<Course[]>(url)

  }


  getRoundedPrice(price: number, due: number): number { //este metodo me redondea el valor de la cuota

    return Math.round(price / due); //me redondea el precio que se divide por la cuota

  }

  getEndDate() {

    return new Date(this.courses.start_date).setDate(new Date(this.courses.start_date).getDate() + this.courses.duration);

  }


  responsiveOptions: any[] | undefined =  [
    {
      breakpoint: '1440px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '425px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '375px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '320px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
