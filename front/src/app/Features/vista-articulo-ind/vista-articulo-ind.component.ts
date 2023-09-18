import { Component, OnInit } from '@angular/core';
import { vistaArtIndServ } from 'src/app/core/services/vista-art-ind-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-articulo-ind',
  templateUrl: './vista-articulo-ind.component.html',
  styleUrls: ['./vista-articulo-ind.component.css']
})
export class VistaArtIndComponent implements OnInit {

  // uploadedImages: string[] = [];
  nomProd: string = 'Gazebo De Poliéster';
  nomCat: string = 'Muebles de exterior';
  nomVen: string = 'Oscar García Lagos';
  desc: string = 'COLORES DISPONIBLES: - BLANCO - DETODOOUTLETARGENTINA Gazebo Plegable 3 x 3 Arma ble con Paredes LISAS (Incluye 3 Laterales) DETOD OOUTLETARG ENTINA'
  precio: string = '$25.550';

  //reemplazar listDias para desplegable según los días del producto
  // listDias any[] = []; 
  // const dias = for(let i = 0; i == this.modelo.dias.length - 1; i++) {
  //   this.listDias[i] = i+1;
  // }

  // reemplazar pago y retiro según vendedor
  // this.pago = this.modelo.pago;
  // this.retiro = this.modelo.retiro;
  // modelo: object = {
  //   UniqueID: 0,
  //   idUsuario: 0,
  //   idTipoProducto: 0,
  //   nombre: '',
  //   detalles: '',
  //   precio: 0,
  //   envio: false,
  //   dias: 0,
  //   pago: 0,
  // }



  id: number = 1; //no sé como inicializar vacío xd
  // respuesta: object = {  }
  respuesta: any = []


  constructor(private service: vistaArtIndServ, private router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
    this.datosProd(this.id);
  }

  //traer datos de producto con UniqueID
  datosProd(id: number) {
    this.service.datosProdServ(this.id).subscribe(res => {
      this.respuesta = res;
      console.log(this.respuesta.usuario)
      console.log(this.respuesta.articulos)
      console.log(this.respuesta.tipo)
    })
  }

  mensajeDias() {
    alert("Tanto para envío como para retiro tendrá su producto en un plazo de 2 días");
  }

  botAlq() {
    if(confirm("¿Desea pasar a la vista de transacción?")) { //claramente esto no iría al menos así
      //acá hay que reemplazar el modelo vacío por los datos faltantes del form: dias y pago
      // localStorage.setItem( 'infoProd', JSON.stringify(this.modelo));
      this.router.navigateByUrl('/'); //acá iría la dirección de la vista de transacción
    }
  }
  
  
  

  // onFileSelected(event: any): void {
    
  //   //dejar de visualizar las imagenes cuando suba otra
  //   this.uploadedImages = [];
  //   const files = event.target.files;
  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       if (file.type.startsWith('image/')) {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file);

  //         reader.onload = () => {
  //           this.uploadedImages.push(reader.result as string);
  //         };
  //       }
  //     }
  //   }
  // }

  
}