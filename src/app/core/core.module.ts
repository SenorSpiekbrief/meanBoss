import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { BrowseModule } from './browse/browse.module';

let modules = [MenuModule,
    HeaderModule,
    BrowseModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports : modules
})
export class CoreModule { }
