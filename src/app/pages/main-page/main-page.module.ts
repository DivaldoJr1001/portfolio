import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { NavButtonModule } from 'src/app/shared/components/nav-button/nav-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class MainPageModule { }
