import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OptionalsComponent } from './modules/crud-data/optionals/optionals.component';
import { MatSelectModule } from '@angular/material/select';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormationsComponent } from './modules/crud-data/formations/formations.component';
import { LanguageComponent } from './modules/crud-data/language/language.component';
import { HomeComponent } from './modules/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { PersonalComponent } from './modules/crud-data/personal/personal.component';
import { SkillComponent } from './modules/crud-data/skill/skill.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/services/toolServices/interceptor/loading.interceptor';
import { UsuarioModule } from './modules/lazyLoading/usuario.module';
import { CVComponent } from './modules/cv/cv.component';
import { ReferencesComponent } from './modules/crud-data/references/references.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilesComponent } from './modules/profiles/profiles.component';
import { LoadingModule } from './modules/loading/loading.module';
import { ToastrModule } from 'ngx-toastr';
import { ProfilesFourComponent } from './modules/profiles-four/profiles-four.component';
import { ModalAddComponent } from './modules/modal-add/modal-add.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileOneComponent } from './modules/profile-one/profile-one.component';
import { ProfileTwoComponent } from './modules/profile-two/profile-two.component';
import { ProfileThreeComponent } from './modules/profile-three/profile-three.component';
import {MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions, MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MailComponent } from './modules/usuario/mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    OptionalsComponent,
    ExperiencesComponent,
    FormationsComponent,
    LanguageComponent,
    HomeComponent,
    NavBarComponent,
    PersonalComponent,
    SkillComponent,
    CVComponent,
    ReferencesComponent,
    ProfilesComponent,
    ProfilesFourComponent,
    ModalAddComponent,
    ProfileOneComponent,
    ProfileTwoComponent,
    ProfileThreeComponent,
    MailComponent,
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
    NgbModule,
    LoadingModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      timeOut: 9000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, 
     useValue: { clickAction: 'check' } as MatCheckboxDefaultOptions}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
