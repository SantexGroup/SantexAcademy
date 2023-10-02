import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // este "courses" despues desaparece y busca los cursos en el backend
  private courses = [
    {
      id: 1,
      name: 'Curso 1',
      description: 'Descripción del curso 1',
      professor: 'Profesor 1',
      duration: '10hs'
    },
    {
      id: 2,
      name: 'Curso 2',
      description: 'Descripción del curso 2',
      professor: 'Profesor 2',
      duration: '9hs'
    },
    {
      id: 3,
      name: 'Curso 3',
      description: 'Descripción del curso 3',
      professor: 'Profesor 3',
      duration: '8hs'
    },
    {
      id: 4,
      name: 'Curso 4',
      description: 'Descripción del curso 4',
      professor: 'Profesor 4',
      duration: '7hs'
    },
    {
      id: 5,
      name: 'Curso 5',
      description: 'Descripción del curso 5',
      professor: 'Profesor 5',
      duration: '6hs'
    },
    {
      id: 6,
      name: 'Curso 6',
      description: 'Descripción del curso 6',
      professor: 'Profesor 6',
      duration: '5hs'
    },
    {
      id: 7,
      name: 'Curso 7',
      description: 'Descripción del curso 7',
      professor: 'Profesor 7',
      duration: '4hs'
    },
    {
      id: 8,
      name: 'Curso 8',
      description: 'Descripción del curso 8',
      professor: 'Profesor 8',
      duration: '3hs'
    },
    {
      id: 9,
      name: 'Curso 9',
      description: 'Descripción del curso 9',
      professor: 'Profesor 9',
      duration: '3hs'
    },
    {
      id: 10,
      name: 'Curso 10',
      description: 'Descripción del curso 10',
      professor: 'Profesor 10',
      duration: '3hs'
    },
    {
      id: 11,
      name: 'Curso 11',
      description: 'Descripción del curso 11',
      professor: 'Profesor 11',
      duration: '3hs'
    },

  ];

  constructor() { }

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  getCourseByPattern(name: string, by: 'ByName' | 'byProfesor') {
    const regexPattern = `.*${name.split('').join('.*')}.*`;
    const regex = new RegExp(regexPattern, 'i'); // 'i' indica que la búsqueda sea insensible a mayúsculas y minúsculas
    let filteredCourses: any[] = []
    if (by === 'ByName') {
      filteredCourses = this.courses.filter(course => regex.test(course.name));
    } else {
      filteredCourses = this.courses.filter(course => regex.test(course.professor));
    }

    return filteredCourses;
  }
}
