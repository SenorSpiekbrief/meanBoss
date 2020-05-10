import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ComponentsModule} from '../shared/components/components.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { BrowseComponent } from './browse/browse.component';

import { DesignationsComponent } from './designations/designations.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TrainingsComponent } from './trainings/trainings.component';


import { StockComponent } from './stock/stock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
let components = [WelcomeComponent, HomeComponent, LoginComponent, SearchComponent, BrowseComponent, DesignationsComponent, ReservationsComponent, TrainingsComponent, StockComponent];
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    ComponentsModule,
  ],
exports: components
})
export class ScreensModule { }
