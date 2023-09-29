import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Product } from 'src/app/core/interfaces/product';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { BackServiceService } from 'src/app/core/services/product.service';
import { MatChip, MatChipList, MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent implements OnInit {
  // Lista de ejemplo de productos
  productList: Product[] = [];
  CategoriesList: Categoria[] = [];
  filterCat: number[] = [];
  typeB: string = '';
  valor: string = '...';
  onChange!: (value: string[]) => void;

  constructor(
    private service: BackServiceService,
    private categorias: CategoriaService
  ) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((result) => {
      this.productList = result;
    });
    this.categorias.getCategories().subscribe((r) => {
      this.CategoriesList = r;
    });
  }

  buscarNombre(name: string) {
    this.service.getbyName(name).subscribe((result) => {
      this.productList = result;
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  propagateChange(value: string[]) {
    if (this.onChange) {
      this.onChange(value);
    }
  }
  toggleSelection(chip: MatChip, id: any) {
    chip.toggleSelected();
    this.writeValue(id);
  }

  writeValue(value: number): void {
    if (this.filterCat.includes(value)) {
      //si esta en la lista lo sacamos
      this.filterCat.splice(this.filterCat.indexOf(value, 1));
    } else {
      //si no esta lo agregamos
      this.filterCat.push(value);
    }
    if (this.filterCat.length >= 1) {
      let body = { ids: this.filterCat };

      this.categorias.getProductsByCategory(body).subscribe((result) => {
        this.productList = result;
      });
    } else {
      this.service.getProducts().subscribe((result) => {
        this.productList = result;
      });
    }
  }

  selectChips(value: string[]) {
    //buscamos si el valor esta en la lista de los filtros
  }
}
