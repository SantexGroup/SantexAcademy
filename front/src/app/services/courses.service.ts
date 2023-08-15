import { Injectable } from '@angular/core';
import { Course } from '../core/interface/courses.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  
  courses: Course[] = [
    {
      id: 1,
      title: 'Sublimación a máquina',
      description:
        'Curabitur in libero ut massa volutpat convallis morbi odio odio odio odio odio',
      price: 2000,
      duration: '13/08/2022',
      starter_date: '20/09/2022',
    },
    {
      id: 2,
      title: 'Sublimación a máquina',
      description:
        'Curabitur in libero ut massa volutpat convallis morbi odio odio odio odio odio',
      price: 2000,
      duration: '24/12/2022',
      starter_date: '20/01/2023',
    },
    {
      id: 3,
      title: 'Sublimación a máquina',
      description:
        'Curabitur in libero ut massa volutpat convallis morbi odio odio odio odio odio',
      price: 2000,
      duration: '17/10/2022',
      starter_date: '13/05/2023',
    },
    {
      id: 4,
      title: 'Sublimación a máquina',
      description:
        'Curabitur in libero ut massa volutpat convallis morbi odio odio odio odio odio',
      price: 2000,
      duration: '23/03/2023',
      starter_date: '24/08/2022',
    },
    {
      id: 5,
      title: 'Sublimación a máquina',
      description:
        'Curabitur in libero ut massa volutpat convallis morbi odio odio odio odio odio',
      price: 2000,
      duration: '12/09/2022',
      starter_date: '29/09/2022',
    },
  ];

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
