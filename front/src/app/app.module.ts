import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OptionalsComponent } from './modules/crud-data/optionals/optionals.component';
import { MatSelectModule } from '@angular/material/select';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormationsComponent } from './modules/crud-data/formations/formations.component';
import { LanguageComponent } from './modules/crud-data/language/language.component';
import { HomeComponent } from './modules/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { SkillComponent } from './modules/crud-data/skill/skill.component';
import { LoadingComponent } from './modules/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/services/toolServices/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OptionalsComponent,
    ExperiencesComponent,
    FormationsComponent,
    LanguageComponent,
    HomeComponent,
    NavBarComponent,
    SkillComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    UsuarioModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    HomeRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
