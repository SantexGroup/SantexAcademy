import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  

import { AuthService } from '../../auth/services/auth.service';
import { CursosService } from '../../cursos/services/cursos.service';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interface/user.interface';
import { Curso } from '../../cursos/interface/cursos.interface';


@Component({
  selector: 'app-aula-virtual',
  templateUrl: './aula-virtual.component.html',
  styleUrls: ['./aula-virtual.component.css']
})
export class AulaVirtualComponent implements OnInit {
  nombreCurso: string | undefined;
  imagenCurso: string | undefined;
  tipoDeUsuario: string | undefined;
  courseId: number | undefined;
  
  alumnosMatriculados: User[] = [];
  datosDeCursado: {
    [userId: number]: {
      [courseId: number]: {
        notas: number[], 
        notaFinal: number, 
        asistencia: { [mes: string]: number }, 
        condAsistencia: boolean 
      } 
    } 
  } = {};
  
  alumnoSeleccionado: User | null = null;

  selectedField: string = 'nombre';      // Campo de busqueda
  searchQuery: string = ''               // Valor de busqueda
  notaInput: number = 0;                 // Entrada de notas
  mesInput: string = '';                 // Entrada de mes
  cantidadClasesInput: number = 0;       // Entrada de cantidad de clases
  casillasVerificadasInput: number = 0;  // Entrada de casillas presente

  formulario: FormGroup;

  constructor(private route: ActivatedRoute,
             private authService: AuthService,
             private cursoService: CursosService,
             private usersService: UsersService,
             private fb: FormBuilder,
             private http: HttpClient,
             ){ 
                this.formulario = this.fb.group({
                  selectedField: ['nombre'],
                  searchQuery: [''],
                  notaInput: [0],
                  notaFinal: 0,
                  condAsistencia: true, 
                  mesInput: [''],
                  asistencia: {},
                  cantidadClasesInput: [0],
                  casillasVerificadasInput: [0]
                });
              }

  ngOnInit(): void {
    this.tipoDeUsuario = this.authService.user?.tipoDeUsuario; // Obtengo tipo de usuario desde AuthService

    // Obtengo el id del curso desde la ruta
    let curso: Curso;
    this.route.params.subscribe((params) => {
      const courseId = params['id'];
      if (courseId !== undefined) {
        this.courseId = courseId; 
      }
      // Obtengo los datos del curso a travez de cursoService
      this.cursoService.getCursoPorId(courseId).subscribe((curso) => {
        this.nombreCurso = curso.nombre;
        this.imagenCurso = curso.imagen;
      });
      // Obtengo los alumnos del curso a travez de userService y la nueva get obtenerUsuariosDelCurso
      this.alumnosMatriculados = [];
      this.usersService.obtenerUsuariosDelCurso(courseId).subscribe((alumnos) => {
        this.alumnosMatriculados = alumnos
      });
    });
    
  }

  
  // Funcion para buscar y seleccionar un alumno de alumnosMatriculados en curso
  search() {
    const selectedField = this.formulario.get('selectedField')?.value;
    const searchQuery = this.formulario.get('searchQuery')?.value;
    
    this.alumnoSeleccionado = null;
    const valorBusqueda = searchQuery.toLowerCase();

    if (selectedField && ['nombre', 'apellido', 'username', 'email'].includes(selectedField)) {
      for (const alumno of this.alumnosMatriculados) {
        const valorCampo = alumno[selectedField as keyof User];
        if (typeof valorCampo === 'string') {
          if (valorCampo.toLowerCase().includes(valorBusqueda)) {
            this.alumnoSeleccionado = alumno;
            break; // Detiene al encontrar la primera coincidencia
          }
        }
      }
    }
    if (!this.alumnoSeleccionado) {
      console.log('No hay coincidencia');
    }
  }

  // Metodo para agregar nota, notaFinal, asistencia y condicionAsistencia del alumno
  agregarDatos(courseId: number) {
    if (this.alumnoSeleccionado) {
      const userId = this.alumnoSeleccionado.id;
      if (userId !== undefined) {
        if (!this.datosDeCursado[userId]) {
          this.datosDeCursado[userId] = {};
        }
        if (!this.datosDeCursado[userId][courseId]) {
          this.datosDeCursado[userId][courseId] = {
            notas: [],
            notaFinal: 0,
            asistencia: {},
            condAsistencia: false,
          };
        }

        const nota = parseFloat(this.formulario.get('notaInput')?.value);
        const mes = this.formulario.get('mesInput')?.value;
        const cantidadClases = this.formulario.get('cantidadClasesInput')?.value;
        const casillasVerificadas = this.formulario.get('casillasVerificadasInput')?.value;

        if (!isNaN(nota)) {
          this.datosDeCursado[userId][courseId].notas.push(nota);
          this.datosDeCursado[userId][courseId].notaFinal = this.promedio(this.datosDeCursado[userId][courseId].notas);
        } else {
          console.log('La nota ingresada no es un número válido.');
        }
        // Estas tres propiedades comentadas no se enviaran a DB son para calculos temporales
        // Si a futuro se las desa incluir en DB se debe modificar aqui tambien el objeto datosDeCursado para incluirlas
        //this.datosDeCursado[userId][courseId].mes = mes;
        //this.datosDeCursado[userId][courseId].cantidadClases = cantidadClases;
        //this.datosDeCursado[userId][courseId].casillasVerificadas = casillasVerificadas;
        this.datosDeCursado[userId][courseId].asistencia = {};
        const porcentajeAsistencia = this.calcularPorcentajeAsistencia(mes, cantidadClases, casillasVerificadas);
        this.datosDeCursado[userId][courseId].asistencia[mes] = porcentajeAsistencia;
      } else {
        console.log('El alumno seleccionado no tiene un ID definido');
      }
    } else {
      console.log('Ningún alumno seleccionado');
    }
  }

  //Funcion Promedio para notaFinal
  promedio(notas: number[]): number {
    if (notas.length === 0) {
      return 0;
    }
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
  }

  // Funcion para asistencia 
  calcularPorcentajeAsistencia(mes: string, cantidadClases: number, casillasVerificadas: number): number {
    if (isNaN(cantidadClases) || isNaN(casillasVerificadas) || cantidadClases <= 0 || casillasVerificadas < 0) {
      return 0; 
    }
    const porcentaje = (casillasVerificadas / cantidadClases) * 100;
    return Math.round(porcentaje * 100) / 100;
  }


  guardarDatosDB() {
    if (Object.keys(this.datosDeCursado).length === 0) {
      console.log('No hay datos para enviar.');
      return;
    }
    this.http.post('http://localhost:4001/cursadoporalumno/', this.datosDeCursado).subscribe(
      (respuesta) => {
        console.log('Datos enviados al servidor con éxito:', respuesta);
      },
      (error) => {
        console.error('Error al enviar datos al servidor:', error);
      }
    );
  }



}

