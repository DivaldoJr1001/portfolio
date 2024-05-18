import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from '../material/material.module';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NavButtonComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    NavButtonComponent,
    LanguageSelectorComponent
  ]
})
export class SharedComponentsModule { }
