import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateDogComponent } from "./create-dog/CreateDogComponent";

const routes: Routes = [
    {
      path: '',
      component: CreateDogComponent,
      children: []
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DogRoutingModule { }
  