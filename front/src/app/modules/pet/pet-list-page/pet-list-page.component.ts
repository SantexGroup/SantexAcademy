import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'user', 'name', 'birth_date', 'breed', 'gender', 'age'];

  constructor(private _petService: PetService) {
    this.dataSource = new MatTableDataSource<Pet>();
    
    this.paginatorOpts = {
      length: 0,
      pageIndex: 0,
      pageSize: 10,
      pageSizeOptions: [5, 10],
    };
  }

  ngOnInit(): void {    
    this.getPaginatedPets(this.paginatorOpts.pageIndex);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /**
   * Recupera datos ya paginados desde el backend para poblar la tabla.
   * @param page número de página (la primer página es 0 ).
   */
  getPaginatedPets(page: number) {
    this.loading = true;    
    this._petService.getAllPets(page).subscribe(
      (resp: any) => {        
        this.dataSource.data = resp.rows;
        setTimeout(() => {
          this.paginator.pageIndex = page
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
   * Solicita nuevos datos al backend en cada cambio de página.
   */
  changePage(event$: PageEvent) {
    this.getPaginatedPets(event$.pageIndex);    
    this.paginatorOpts.pageIndex = event$.pageIndex;
    this.paginatorOpts.pageSize = event$.pageSize;
  }
}
