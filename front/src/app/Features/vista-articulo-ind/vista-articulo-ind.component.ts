import { Component, OnInit } from '@angular/core';
import { VistaArticuloService } from 'src/app/core/services/vista-articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-articulo',
  templateUrl: './vista-articulo.component.html',
  styleUrls: ['./vista-articulo.component.css']
})
export class VistaArticuloComponent implements OnInit {

  // uploadedImages: string[] = [];
  nomProd: string = 'Gazebo De Poliéster';
  nomCat: string = 'Muebles de exterior';
  nomVen: string = 'Oscar García Lagos';
  desc: string = 'COLORES DISPONIBLES: - BLANCO - DETODOOUTLETARGENTINA Gazebo Plegable 3 x 3 Arma ble con Paredes LISAS (Incluye 3 Laterales) DETOD OOUTLETARG ENTINA'
  precio: string = '$25.550';

  
  //Parte de esto debería ir en onInit o en otros lugares
  //acá van las inicializaciones que deberían ser las "correctas"
  // pago: boolean = false;
  // retiro: boolean = true;
  // nomProd: string = modelo.nombre;
  // nomCat: string = modelo.Idtipoproducto.nombre;
  // nomVen: string = modelo.idUsuario.nombre + '' + modelo.idUsuario.apellido;
  // desc: string = modelo.detalles;
  // precio: string = modelo.precio;

  //reemplazar listDias para desplegable según los días del producto
  // listDias any[] = []; 
  // const dias = for(let i = 0; i == this.modelo.dias.length - 1; i++) {
  //   this.listDias[i] = i+1;
  // }

  // reemplazar pago y retiro según vendedor
  // this.pago = this.modelo.pago;
  // this.retiro = this.modelo.retiro;



  IDProdPrue: number = 0; //no sé como inicializar vacío xd
  modelo: object = {
    UniqueID: 0,
    idUsuario: 0,
    idTipoProducto: 0,
    nombre: '',
    detalles: '',
    precio: 0,
    envio: false,
    dias: 0,
    pago: 0,
  }

  constructor(private service: VistaArticuloService, private router: Router) { }

  ngOnInit(): void {
    let infoLocal = localStorage.getItem('idProd') //leer localStorage para saber UniqueID. Además hay que reemplazarlo por modelo.UniqueID y/o por IDProdPrue
    this.datosProd(this.IDProdPrue); //acá se debería reemplazar por lo de localStorage 
    // const imagenes = ("front/src/assets")
  }

  mensajeDias() {
    alert("Tanto para envío como para retiro tendrá su producto en un plazo de 2 días");
  }

  //traer datos prod con UniqueID
  datosProd(id: number) {
    // this.service.datosProdServ(this.IDProdPrue).subscribe(res => {
    // //reemplazar modelo por datos de producto
    // this.modelo.idUsuario = res[0].products.idUsuario,
    // this.modelo.idTipoProducto = res[1].products.idTipoProducto,
    // this.modelo.nombre = res[2].products.nombre,
    // this.modelo.detalles = res[3].products.detalles,
    // this.modelo.precio = res[4].products.precio,
    // this.modelo.envio = res[5].products.envio,
    // })
  }

  botAlq() {
    //acá tomamos los datos del form? o eso se indica en action
    if(confirm("¿Desea pasar a la vista de transacción?")) { //claramente esto no iría al menos así
      //acá hay que reemplazar el modelo vacío por los datos faltantes del form: dias y pago
      localStorage.setItem( 'infoProd', JSON.stringify(this.modelo));
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