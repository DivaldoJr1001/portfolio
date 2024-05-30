import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavButtonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    NavButtonComponent
  ]
})
export class NavButtonModule { }
