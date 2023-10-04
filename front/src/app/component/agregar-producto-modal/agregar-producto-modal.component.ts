import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.css']
})
export class AgregarProductoModalComponent {
fotoSerializada: any;
limpiarFoto() {
}
  fotosSerializadas: (string | ArrayBuffer | null)[] = [];
  indiceFotoActual = 0;

  
  inputVisible: boolean = true; 
  
 

  constructor(public dialogRef: MatDialogRef<AgregarProductoModalComponent>, private http: HttpClient) {}
  fotoCargada: boolean = false;

  subirFoto(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.fotoSerializada = reader.result;

      this.fotosSerializadas.push(reader.result);
      if (this.indiceFotoActual === null) {
        this.indiceFotoActual = 0;
      }

      this.fotoCargada = true; // Cambia la variable después de cargar la foto
      this.inputVisible = false; // Oculta el input después de cargar la foto

    };

    
    reader.readAsDataURL(file);

  }


  crearProducto(): void {
    // Objeto contenedor de los datos del formulario.
    const producto = {
      nombre: 'Nombre del producto',
      categoria: 'Empresarial',
      precioEvento: 100,
      cantidadDisponible: 10,
      detalle: 'Detalle del producto',
      foto: this.fotoSerializada
    };

    //Servicio HTTP de Angular para enviar estos datos al backend.
    this.http.post('https://qkbpvgr6-5001.brs.devtunnels.ms/', producto).subscribe((response: any) => {
      console.log('Producto creado exitosamente', response);

      this.dialogRef.close();
    }, (error: any) => {
    
      console.error('Error al crear el producto', error);
    });
  }
}


