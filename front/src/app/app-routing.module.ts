import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Features/home-page/home-page.component';
import { BasesComponent } from './Features/bases/bases.component';
import { RegistroComponent } from './Features/registro/registro.component';
import { CargaArticulosComponent } from './Features/carga-articulos/carga-articulos.component';
import { VistaArtIndComponent } from './Features/vista-articulo-ind/vista-articulo-ind.component';
import { ModificarArticuloComponent } from './Features/modificar-articulo/modificar-articulo.component';
import { DatosUsuarioComponent } from './Features/datos-usuario/datos-usuario.component';
import { HistorialVentasComponent } from './Features/historial-ventas/historial-ventas.component';
import { HistorialCompradorComponent } from './Features/historial-comprador/historial-comprador.component';
import { VistaPorTextoComponent } from './Features/vista-por-texto/vista-por-texto.component';
import { CategoriasComponent } from './Features/categorias/categorias.component';
import { EditarUsuarioComponent } from './Features/editar-usuario/editar-usuario.component';
import { HistorialContratacionesComponent } from './Features/historial-contrataciones/historial-contrataciones';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }, 
  {
  path: 'bases',
  component: BasesComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'carga-articulos',
    component: CargaArticulosComponent
  },
  {
    path: 'vista-articulo',
    component: VistaArtIndComponent,
  },
  {
    path: 'modificar-articulo',
    component: ModificarArticuloComponent,
  },
  {
    path: 'datos-usuario',
    component: DatosUsuarioComponent,
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent  
  },
  {
    path: 'historial-ventas',
    component: HistorialVentasComponent,
  },
  {
    path: 'historial-compras',
    component: HistorialCompradorComponent,
  },
  {
    path: 'historial-contrataciones',
    component: HistorialContratacionesComponent,
  },
  {
    path: 'vista-por-texto',
    component: VistaPorTextoComponent,
  },
  {
    path: 'categorias/:id',
    component: CategoriasComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
