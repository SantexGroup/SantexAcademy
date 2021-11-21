import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Router } from '@angular/router';
import { listDog } from 'src/app/core/interfaces/dog/listDog.interface';
import { DogService } from 'src/app/core/services/dog/dog.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-list-dog',
  templateUrl: './list-dog.component.html',
  styleUrls: ['./list-dog.component.scss'],

})


export class ListDogComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatTable)
  table!: MatTable<listDog>;
  listadoPerro: listDog[] = []
  displayedColumns: string[] = ['fechaNacimiento', 'nombreDog', 'raza', 'sexo', 'userName'];
  dataSource = new MatTableDataSource<listDog>();


 constructor(
  
    private router: Router,
    private dogService: DogService,
    private toastService: ToastService,
    
  ){}

  ngOnInit(): void {
    this.dogService.listAllDogs(1).subscribe( (res: any) => {
      this.listadoPerro = res;
      console.log(this.listadoPerro);
      this.dataSource.data= this.listadoPerro;
    });  
  }
  
 

 

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
 //const listadoPerro: listDog[] = [
  //{ nombrePerro: "TANGO", raza: "pastor aleman", sexo: 1, edad: 11,nombreUsuario: "example2"},
  // {id:1, nombrePerro: "TANGO", raza: "pastor aleman", sexo: 1, edad: 11,nombreUsuario: "example2"},
  // {id:1, nombrePerro: "TANGO", raza: "pastor aleman", sexo: 1, edad: 11,nombreUsuario: "example2"},
  // {id:1, nombrePerro: "TANGO", raza: "pastor aleman", sexo: 1, edad: 11,nombreUsuario: "example2"}
//];  




