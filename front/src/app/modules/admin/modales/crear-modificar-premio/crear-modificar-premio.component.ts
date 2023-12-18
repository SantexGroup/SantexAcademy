import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Premio } from 'src/app/core/interfaces/premio';
import { PremioService } from 'src/app/core/services/premio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-modificar-premio',
  templateUrl: './crear-modificar-premio.component.html',
  styleUrls: ['./crear-modificar-premio.component.css']
})
export class CrearModificarPremioComponent implements OnInit {

  form:FormGroup;
  modificar:boolean;



  constructor(fb:FormBuilder, private premioService:PremioService,@Inject(MAT_DIALOG_DATA)private dataPremio:Premio,
  private modalActual:MatDialogRef<CrearModificarPremioComponent> ) { 

    this.modificar = false;
    if(this.dataPremio !== null){
      this.modificar = true;
    }
    
    this.form = fb.group({
      nombre:['', [Validators.required,Validators.maxLength(40)]],
      cantidad:['', [Validators.required, Validators.max(200000)]],
      costo:['', [Validators.required, Validators.max(200000)]],
      descripcion:['', [Validators.required, Validators.maxLength(100)]]

    });

  }

  ngOnInit(): void {

    if(this.modificar){
      this.form.patchValue({
        nombre:this.dataPremio.name,
        cantidad:this.dataPremio.cantidad,
        costo:this.dataPremio.costo,
        descripcion:this.dataPremio.description
      });
    }

  }

  crearPremio():void{
    
    const formValue = this.form.value;
    
    const nuevoPremio:Premio ={
      name: formValue.nombre,
      costo: formValue.costo,
      cantidad: formValue.cantidad,
      description: formValue.descripcion
    }

    this.premioService.crear(nuevoPremio).subscribe({
      next:()=>{
        Swal.fire(
          'EXITO!',
          `El premio se creo correctamente.`,
          'success'
        );
        this.modalActual.close(true);
      },
      error:()=>{
        Swal.fire(
          'Error',
          'No se pudo crear el premio.',
          'error'
        );
      }
    });

    

  }

  modificarPremio():void{
    const formValue = this.form.value;
    const premioModificado:Premio ={
      name: formValue.nombre,
      costo: formValue.costo,
      cantidad: formValue.cantidad,
      description: formValue.descripcion
    }

    this.premioService.modificar(this.dataPremio.id!, premioModificado).subscribe({
      next:()=>{
        Swal.fire(
          'EXITO!',
          `El premio se modificó correctamente.`,
          'success'
        );
        this.modalActual.close(true);
      },
      error:()=>{
        Swal.fire(
          'ERROR',
          `El premio no se pudo modificar.`,
          'error'
        );
      }
    });
  }

}
