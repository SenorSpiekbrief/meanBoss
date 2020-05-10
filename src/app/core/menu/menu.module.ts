import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuContainerComponent } from './menu-container/menu-container.component';

@NgModule({
  declarations: [MenuContainerComponent],
  exports: [MenuContainerComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ]
})
export class MenuModule { }
