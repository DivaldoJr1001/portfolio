import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MaterialModule } from '../material/material.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    MenuButtonComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    MenuButtonComponent,
    LanguageSelectorComponent
  ]
})
export class SharedComponentsModule { }
