import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// import { Curso } from '../../cursos/interface/cursos.interface';
// import { Nivel } from "src/app/models/nivel.interface";
// import { AuthService } from '../../auth/services/auth.service';
// import { Matricula } from '../../matriculas/interfaces/interfaces';
// import { MatriculasService } from '../../matriculas/services/matriculas.service';


@Component({
    selector: 'app-mis-cursos',
    templateUrl: './mis-cursos.component.html',
    styleUrls: ['./mis-cursos.component.css']
  })

  export class MisCursosComponent implements OnInit {
   // @Input() cursos: Curso[] = [];
    
    // nivelNvo: Nivel = {
    //   nombre: 'Vacio',
    //   descripcion: 'Vacio',
    // };
    
  
    // get user() {
    //   return this.authService.user;
    // }
    user: any = {//Borrar tres lineas
      id: 1, // Puedes asignar un valor de usuario ficticio aquí
      // Otras propiedades del usuario si es necesario
    };
  
    @Input() curso: any = {//sacar any poner Curso
      id: 0,
      nombre: 'MAGIA Y ALQUIMIA',
      descripcion: 'Conoce los arcanos secretos del desarrollo web y programación avanzada',
      imagen: './assets/imagesPlus/Magia y alquimia.jpg',
      duracion: 72,
      capacidad: 50,
      idnivel: 1,
      requisitos:  'Curiosidad, aceptación y obsesión',
      habilitado: true,
      fechainicio: 2023/12/11,
      fechafin: 31/12/9999,
      idusuarioalta: 32,
      idusuariomodificacion: 1,
      createdAt: new Date,
      updatedAt: new Date,
      //Nivel: this.nivelNvo,
      estado: 'A',
    }
  
    // matricula: Matricula = {
    // cursoId: 0,
    // userId: 0,
    // }
  
    constructor(//private authService: AuthService,
                //private matriculasService: MatriculasService,
                private router: Router) { }
  
    ngOnInit(): void {
     // console.log(this.cursos)
     this.curso = [
      {
        id: 1,
        nombre: 'EDUARDO',
        descripcion: 'Multitâche, aprenda rompiendo',
        imagen: './assets/imagesPlus/los-accidentes-no-existen.jpg',
        duracion: 24,
        capacidad: 10,
        idnivel: 1,
        requisitos:  'Open main, Carpe diem',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 2,
        nombre: 'MAGIA Y ALQUIMIA',
        descripcion: 'Conoce los arcanos secretos del desarrollo web y programación avanzada',
        imagen: './assets/imagesPlus/Magia y alquimia.jpg',
        duracion: 72,
        capacidad: 50,
        idnivel: 1,
        requisitos:  'Curiosidad, aceptación y obsesión',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 3,
        nombre: 'Origami',
        descripcion: 'Juegue con papelitos',
        imagen: './assets/imagesPlus/dragon-papel-origami.jpg',
        duracion: 6,
        capacidad: 20,
        idnivel: 1,
        requisitos:  'tiempo para relajarse',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 4,
        nombre: 'JARDINERIA Avanzada',
        descripcion: 'Junte ramas y relájese ... si puede',
        imagen: './assets/imagesPlus/poda-grande.jpg',
        duracion: 3,
        capacidad: 10,
        idnivel: 1,
        requisitos:  'Paciencia, tolerancia a la frustración ... más paciencia y mucha más tolerancia ... o pruebe con Yoga',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 1,
        nombre: 'EDUARDO',
        descripcion: 'Multitâche, aprenda rompiendo',
        imagen: './assets/imagesPlus/los-accidentes-no-existen.jpg',
        duracion: 24,
        capacidad: 10,
        idnivel: 1,
        requisitos:  'Open main, Carpe diem',
        habilitado: false,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 2,
        nombre: 'MAGIA Y ALQUIMIA',
        descripcion: 'Conoce los arcanos secretos del desarrollo web y programación avanzada',
        imagen: './assets/imagesPlus/Magia y alquimia.jpg',
        duracion: 72,
        capacidad: 50,
        idnivel: 1,
        requisitos:  'Curiosidad, aceptación y obsesión',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 3,
        nombre: 'Origami',
        descripcion: 'Juegue con papelitos',
        imagen: './assets/imagesPlus/dragon-papel-origami.jpg',
        duracion: 6,
        capacidad: 20,
        idnivel: 1,
        requisitos:  'tiempo para relajarse',
        habilitado: true,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
      {
        id: 4,
        nombre: 'JARDINERIA Avanzada',
        descripcion: 'Junte ramas y relájese ... si puede',
        imagen: './assets/imagesPlus/poda-grande.jpg',
        duracion: 3,
        capacidad: 10,
        idnivel: 1,
        requisitos:  'Paciencia, tolerancia a la frustración ... más paciencia y mucha más tolerancia ... o pruebe con Yoga',
        habilitado: false,
        fechainicio: 3/3/2023,
        fechafin: 31/12/9999,
        idusuarioalta: 32,
        idusuariomodificacion: 1,
        createdAt: new Date,
        updatedAt: new Date,
        estado: 'A',
      },
    ];
    }
  
    ingresar(){
      if (this.user){
        // this.matriculasService.addMatricula({
        //   cursoId: this.curso.id!,
        //   userId: this.user.id
        // })
        //     .subscribe( matricula => {
        //       console.log('add :', matricula)
               this.router.navigate(['/cursos/index'])
        //     })
      }else{
        this.router.navigate(['/aula']);
      }
      
    }
  ////////////-------------No borrar se empleara luego de habilitado Matricula---------//////
    // inscribir() {
    //   if (this.user.matriculado === true) {
    //     this.router.navigate(['/aula-virtual']);
    //   } else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Matriculación no aprobada',
    //       text: 'Su matriculación aún no fue aprobada, póngase en contacto con la administración',
    //       showCancelButton: true,
    //       confirmButtonText: 'Administración',
    //       cancelButtonText: 'Permanecer en la página',
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         this.router.navigate(['/cursos/index'], { queryParams: { email: this.user.email } });
    //       }
    //     });
    //   }
    // }
  //////----------------------------------------------------------------------------------//////////  
  }



/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  */

/*import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  cursosInscritos: string[] = [];

  constructor(private matriculasService: MatriculasService) {}

  ngOnInit(): void {
    // Obtener la lista de cursos inscritos al cargar la página
    this.matriculasService.obtenerCursosInscritos().subscribe(
      (cursosInscritos: string[]) => {
        this.cursosInscritos = cursosInscritos;
      },
      (error) => {
        console.error('Error al obtener los cursos inscritos:', error);
      }
    );
  }
}
*/

/*import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  cursosInscritos: string[] = [];
  userId: number = 1; // Reemplaza '1' con el userId real o la lógica para obtenerlo

  constructor(private matriculasService: MatriculasService) {}

  ngOnInit(): void {
    // Obtener la lista de cursos inscritos al cargar la página
    this.matriculasService.obtenerCursosInscritos(this.userId).subscribe(
      (cursosInscritos: string[]) => {
        this.cursosInscritos = cursosInscritos;
      },
      (error) => {
        console.error('Error al obtener los cursos inscritos:', error);
      }
    );
  }
}

 // Función para mostrar/ocultar la lista desplegable
 toggleListaDesplegable() {
  this.listaDesplegableVisible = !this.listaDesplegableVisible;
}
*/
/*import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  cursosInscritos: string[] = [];
  userId: number = 1; // Reemplaza '1' con el userId real o la lógica para obtenerlo
  listaDesplegableVisible = false; // Variable para controlar la visibilidad de la lista desplegable

  constructor(private matriculasService: MatriculasService) {}

  ngOnInit(): void {
    // Obtener la lista de cursos inscritos al cargar la página
    this.matriculasService.obtenerCursosInscritos(this.userId).subscribe(
      (cursosInscritos: string[]) => {
        this.cursosInscritos = cursosInscritos;
      },
      (error) => {
        console.error('Error al obtener los cursos inscritos:', error);
      }
    );
  }

  // Función para mostrar/ocultar la lista desplegable
  toggleListaDesplegable() {
    this.listaDesplegableVisible = !this.listaDesplegableVisible;
  }
}
*/
/*import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  cursosInscritos: string[] = [];
  userId: number = 1; // Reemplaza '1' con el userId real o la lógica para obtenerlo
  listaDesplegableVisible = false; // Variable para controlar la visibilidad de la lista desplegable

  constructor(private matriculasService: MatriculasService) {}

  ngOnInit(): void {
    // Obtener la lista de cursos inscritos al cargar la página
    this.matriculasService.obtenerCursosInscritos(this.userId).subscribe(
      (cursosInscritos: string[]) => {
        this.cursosInscritos = cursosInscritos;
      },
      (error) => {
        console.error('Error al obtener los cursos inscritos:', error);
      }
    );
  }

  // Función para mostrar/ocultar la lista desplegable
  toggleListaDesplegable() {
    this.listaDesplegableVisible = !this.listaDesplegableVisible;
  }
}
*/
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {
  cursosInscritos: string[] = [];
  userId: number = 1; // Puedes cambiar esto según tus necesidades
  listaDesplegableVisible = false;

  constructor() {}

  ngOnInit(): void {
    // Simula datos de cursos inscritos
    this.cursosInscritos = ['Curso 1', 'Curso 2', 'Curso 3'];
  }

  toggleListaDesplegable() {
    this.listaDesplegableVisible = !this.listaDesplegableVisible;
  }
}
*/
//------------------------------recuperar----------------------------------//
// import { Component, OnInit } from '@angular/core';
// import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service';

// @Component({
//   selector: 'app-mis-cursos',
//   templateUrl: './mis-cursos.component.html',
//   styleUrls: ['./mis-cursos.component.css']
// })
// export class MisCursosComponent implements OnInit {
//   cursosInscritos: string[] = [];
//   userId: number = 1; // Reemplaza '1' con el userId real o la lógica para obtenerlo

//   constructor(private matriculasService: MatriculasService) {}

//   ngOnInit(): void {
//     // Obtener la lista de cursos inscritos al cargar el componente
//     this.matriculasService.obtenerCursosInscritos(this.userId).subscribe(
//       (cursosInscritos: string[]) => {
//         this.cursosInscritos = cursosInscritos;
//       },
//       (error) => {
//         console.error('Error al obtener los cursos inscritos:', error);
//       }
//     );
//   }
// // ...

// listaDesplegableVisible = false; // Variable para controlar la visibilidad de la lista desplegable

// // Función para mostrar/ocultar la lista desplegable
// toggleListaDesplegable() {
//   this.listaDesplegableVisible = !this.listaDesplegableVisible;
// }

// // ...

//   // Otras funciones del componente
// }
