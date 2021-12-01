import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
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
  listadoPerro: listDog[] = [];
  displayedColumns: string[] = [
    'userName',
    'nombreDog',
    'raza',
    'sexo',
    'edad',
  ];
  dataSource = new MatTableDataSource<listDog>();
  cantidad!: number;
  nroPagina!: number;
  itemsPorPagina!: number;
  color = '#33FFF6';

  constructor(
    private router: Router,
    private dogService: DogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.dogService.listAllDogs(1).subscribe((res: any) => {
      this.listadoPerro = res.response;
      console.log(this.listadoPerro);
      this.dataSource.data = this.listadoPerro;
      this.cantidad = res.count;
    });
  }

  listadoPerroPag(page: number) {
    this.dogService.listAllDogs(page).subscribe(
      (res: any) => {
        this.listadoPerro = res.response;
        this.dataSource.data = this.listadoPerro;
        setTimeout(() => {
          this.cantidad = res.count;
          (this.paginator.length = this.cantidad),
            (this.paginator.pageIndex = this.nroPagina);
          this.paginator.pageSize = this.itemsPorPagina;
        }, 0);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  cambiaPagina(event$: PageEvent) {
    this.listadoPerroPag(event$.pageIndex + 1);
    this.nroPagina = event$.pageIndex;
    this.itemsPorPagina = event$.pageSize;
  }

  public calcularEdad(meses: number) {
    let calculoAnios = Math.floor(meses / 12);
    let calculoMes = meses % 12;
    let mes = 'menos de 1 mes';
    let anio = '';
    let union = '';

    if (calculoAnios == 1) {
      anio = '1 año';
    } else {
      if (calculoAnios > 1) {
        anio = calculoAnios + ' años';
      }
    }

    if (calculoMes == 1) {
      mes = '1 mes';
    } else {
      if (calculoMes > 1) {
        mes = calculoMes + ' meses';
      }
    }

    if ((calculoAnios != 0) && (calculoMes != 0)) {
      union = ' y ';
    }

    return anio + union + mes;
    /*if (calculoMes === 1) {
      mes = '1 mes';
    } else {
      if (calculoMes > 1) {
        mes = calculoMes + ' meses';
      }
    }
    if (calculoAnios === 0) {
      mensaje = mes;
    } else {
      if (calculoAnios === 1) {
        if (calculoMes > 0) {
          mensaje = '1 año y ' + mes;
        } else {
          mensaje = '1 año';
        }
      } else {
        if (calculoMes > 0) {
          mensaje = calculoAnios + ' años';
        } else {
          mensaje = calculoAnios + ' años y ' + mes;
        }
      }
    }*/
    //return mensaje;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
