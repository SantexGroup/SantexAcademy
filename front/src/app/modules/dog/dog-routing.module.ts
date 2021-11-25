import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateDogComponent } from "./create-dog/CreateDogComponent";
import { ListDogComponent } from "./list-dog/list-dog.component";

const routes: Routes = [
    {
      path: '',
      component: CreateDogComponent,
      children: []
    },
    {
      path: 'listado',
      component: ListDogComponent,
      children: []
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DogRoutingModule { }
  