import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from '../material/material.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    MenuButtonComponent
  ]
})
export class SharedComponentsModule { }
