import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootModule, UIRouterModule } from '@uirouter/angular';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ScreensModule } from './screens/screens.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {APP_STATES} from './app.states';

import { AppComponent } from './app.component';

const rootModule: RootModule = {
  states: APP_STATES,
  useHash: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(rootModule),
    HttpClientModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    ScreensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
