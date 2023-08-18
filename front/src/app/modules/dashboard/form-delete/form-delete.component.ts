import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css']
})
export class FormDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titularAlerta: string ='';
  showDelete() {
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-confirm-button-class '
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "¡No serás capaz de revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Si, eliminar!',
      confirmButtonColor: '#3085d6',
      cancelButtonText: '¡No, cancelar!',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Tu producto ha sido eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Producto seguro :)',
          'error'
        )
      }
    })
    return false;
  }
  mostrar() {
    Swal.fire('Registro exitoso .... ', this.titularAlerta);
    return false;
  }
}
