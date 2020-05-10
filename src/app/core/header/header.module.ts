import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RootModule, UIRouterModule } from '@uirouter/angular';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { LoginHeaderComponent } from './login-header/login-header.component';;
import { RegisterHeaderComponent } from './register-header/register-header.component'

const components = [HeaderContainerComponent, RegisterHeaderComponent, LoginHeaderComponent];

@NgModule({
  declarations: components,
  imports: [
    FontAwesomeModule,
    CommonModule,
    UIRouterModule
  ],
exports: components
})
export class HeaderModule { }
