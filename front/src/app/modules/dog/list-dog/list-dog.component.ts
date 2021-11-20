import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { listDogService } from 'src/app/core/services/listDog/listDog.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-list-dog',
  templateUrl: './list-dog.component.html',
  styleUrls: ['./list-dog.component.scss'],

})


export class ListDogComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombreUsuario', 'nombrePerro', 'raza', 'sexo', 'edad'];
  dataSource = new MatTableDataSource<listDog>(ELEMENT_DATA);

 // constructor(
  
   // private router: Router,
    //private listDogService: listDogService,
    
  //){}

  //ngOnInit():void{};
  //this.listDogService.getAllDog().suscribe(ELEMENT_DATA );

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface listDog {
 
  nombreUsuario: string;
  nombrePerro: string;
  raza: string;
  sexo: number;
  edad: number;
  
}

const ELEMENT_DATA: listDog[] = [
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  {nombreUsuario: 'juan', nombrePerro: 'lulu', raza: 'caniche', sexo: 1 , edad: 6},
  
];

