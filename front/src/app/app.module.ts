import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { register } from 'swiper/element/bundle';
register();

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { authModule } from './modules/auth/auth.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { VolunteerFiltersComponent } from './components/volunteer-filters/volunteer-filters.component';
import { VolunteerCardComponent } from './components/volunteer-card/volunteer-card.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { VolunterIdComponent } from './pages/volunter-id/volunter-id.component';

import { StoreModule, ActionReducer } from '@ngrx/store';
import { authReducer } from './core/auth.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ModalAplicationComponent } from './components/modal-aplication/modal-aplication.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { ModalAfterApplicationComponent } from './components/modal-after-application/modal-after-application.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { StepsToVolunteerComponent } from './pages/steps-to-volunteer/steps-to-volunteer.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';


import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ModalStatusComponent } from './components/modal-status/modal-status.component';


export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    VolunteersComponent,
    VolunteerFiltersComponent,
    VolunteerCardComponent,
    OrganizationDetailsComponent,
    VolunterIdComponent,
    ModalAplicationComponent,
    ExchangeComponent,
    ModalAfterApplicationComponent,
    AboutUsComponent,
    ContactComponent,

    StepsToVolunteerComponent,
    BenefitsComponent,

    FormContactComponent,
    ModalStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    authModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
    StoreModule.forRoot(
      { auth: authReducer },
      {
        metaReducers: [localStorageSyncReducer],
      }
    ),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
