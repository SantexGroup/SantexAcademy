import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Pet } from '../../../core/interfaces/pets/pets.interface';
import { PetService } from '../../../core/services/pet/pet.service';

export interface PaginatorOpts {
  length: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
}

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list-page.component.html',
  styleUrls: ['./pet-list-page.component.scss'],
})
export class PetListPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Pet>;

  dataSource!: MatTableDataSource<Pet>;
  paginatorOpts!: PaginatorOpts;
  loading: boolean = false;

  sortBy!: Sort;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'user',
    'name',
    'birth_date',
    'breed',
    'dangerous',
    'gender',
    'age',
  ];

  constructor(private _petService: PetService) {
    this.dataSource = new MatTableDataSource<Pet>();

    // Opciones iniciales de paginación
    this.paginatorOpts = {
      length: 0,
      pageIndex: 0,
      pageSize: 10,
      pageSizeOptions: [5, 10],
    };

    // Opciones iniciales de ordenamiento
    this.sortBy = {
      active: 'id',
      direction: 'asc',
    };
  }

  ngOnInit(): void {
    this.getPaginatedPets(
      this.paginatorOpts.pageIndex,
      this.paginatorOpts.pageSize,
      this.sortBy.active,
      this.sortBy.direction
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /**
   * Recupera datos ya paginados desde el backend para poblar la tabla.
   * @param page número de página (la primer página es 0 ).
   * @param limit cantidad de ítems a recuperar (10 por defecto).
   * @param sort campo/columna por la que se ordena ('id' por defecto)
   * @param order dirección de ordenamiento ('asc' por defecto)
   */
  getPaginatedPets(page: number, limit: number, sort: string, order : string) {
    this.loading = true;
    this._petService.getAllPets(page, limit, sort, order).subscribe(
      (resp: any) => {
        this.dataSource.data = resp.rows;
        setTimeout(() => {
          this.paginator.pageIndex = page;
          this.paginator.length = resp.count;
        }, 0);
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  /**
   * Solicita nuevos datos al backend en cada cambio de página,
   * manteniendo el orden elegido actualmente
   */
  changePage(event$: PageEvent) {
    this.getPaginatedPets(
      event$.pageIndex,
      event$.pageSize,
      this.sortBy.active,
      this.sortBy.direction
    );
    this.paginatorOpts.pageIndex = event$.pageIndex;
    this.paginatorOpts.pageSize = event$.pageSize;
  }

  //https://material.angular.io/components/sort/overview
  /**
   * Solicita nuevos datos al backend en cada cambio de orden,
   * manteniendo el número de página y cantidad de items actuales
   */
  changeSort(sortState: Sort | any) {
    this.sortBy = sortState;
    this.getPaginatedPets(
      this.paginatorOpts.pageIndex,
      this.paginatorOpts.pageSize,
      this.sortBy.active,
      this.sortBy.direction
      );
  }
}
