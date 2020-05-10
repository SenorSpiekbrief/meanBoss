import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseContainerComponent } from './browse-container/browse-container.component';

@NgModule({
  declarations: [BrowseContainerComponent],
  exports: [BrowseContainerComponent],
  imports: [
    CommonModule
  ]
})
export class BrowseModule { }
