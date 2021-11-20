import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule, MatOptionModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DogService } from "src/app/core/services/dog/dog.service";
import { UserService } from "src/app/core/services/user/user.service";
import { DashboardModule } from "../dashboard/dashboard.module";
import { LoginRoutingModule } from "../login/login-routing.module";
import { CreateDogComponent } from "./create-dog/CreateDogComponent";
import { ListDogComponent } from "./list-dog/list-dog.component";
import { DogRoutingModule } from "./dog-routing.module";
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatPaginatorModule } from "@angular/material/paginator";


@NgModule({
  declarations: [CreateDogComponent, ListDogComponent],
  imports: [
    CommonModule,
    DogRoutingModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    DashboardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatMomentDateModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  
  ],
  providers: [
    DogService,
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    DatePipe

    
    //aca van los servicios que se conecten con la api
  ],

})
export class DogModule {}