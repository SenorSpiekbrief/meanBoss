import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [DynamicFormComponent, QuestionComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[DynamicFormComponent,QuestionComponent]
})
export class ComponentsModule { }
