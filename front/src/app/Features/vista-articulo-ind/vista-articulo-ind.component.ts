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



  idProd: number = 1; //no sé como inicializar vacío xd
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

  constructor(private service: vistaArtIndServ, private router: Router) { }

  ngOnInit(): void {
    console.log(this.idProd);
    this.datosProd(this.idProd);
    
  }

  mensajeDias() {
    alert("Tanto para envío como para retiro tendrá su producto en un plazo de 2 días");
  }

  //traer datos de producto con UniqueID
  datosProd(id: number) {
    this.service.datosProdServ(this.idProd).subscribe(res => {

    })
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