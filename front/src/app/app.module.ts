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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    authModule,
    DashboardModule,
    FormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
