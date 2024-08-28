import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavFooterComponent } from './nav-footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavButtonModule } from '../nav-button/nav-button.module';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    NavFooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    MatTooltipModule
  ],
  exports: [
    NavFooterComponent
  ]
})
export class NavFooterModule { }
