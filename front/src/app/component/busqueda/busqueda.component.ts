import { Component, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { MueblesService } from '../../service/muebles.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @Input() busquedaFilter:string;
  muebles: {};
  muebleArray: any[];
  muebleFiltrados: any[];

  constructor(  
    private muebleService: MueblesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) 
    {
    this.muebles = '';
    this.muebleArray=[];
    this.muebleFiltrados=[];
    this.router=router
    this.busquedaFilter='';
    this.activatedRoute=activatedRoute
  }
ngOnInit() {
    this.muebleArray=this.muebleService.muebleArray;
}
   filterResult(value: string) {
    this.muebleService.filtrarMuebles(value);
    this.router.navigate(
      [],
      {
          relativeTo: this.activatedRoute,
          queryParams: {value: value},
          queryParamsHandling: 'merge'
      }
  ); 
  }
 

}
