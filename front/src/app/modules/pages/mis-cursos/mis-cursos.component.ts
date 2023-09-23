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
import { Component, OnInit } from '@angular/core';
import { MatriculasService } from 'src/app/modules/matriculas/services/matriculas.service'; // Ajusta la ruta según la ubicación de tu servicio

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
    // Obtener la lista de cursos inscritos al cargar el componente
    this.matriculasService.obtenerCursosInscritos(this.userId).subscribe(
      (cursosInscritos: string[]) => {
        this.cursosInscritos = cursosInscritos;
      },
      (error) => {
        console.error('Error al obtener los cursos inscritos:', error);
      }
    );
  }
// ...

listaDesplegableVisible = false; // Variable para controlar la visibilidad de la lista desplegable

// Función para mostrar/ocultar la lista desplegable
toggleListaDesplegable() {
  this.listaDesplegableVisible = !this.listaDesplegableVisible;
}

// ...

  // Otras funciones del componente
}
