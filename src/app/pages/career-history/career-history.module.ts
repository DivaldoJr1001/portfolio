import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerHistoryComponent } from './career-history.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavButtonModule } from 'src/app/shared/components/nav-button/nav-button.module';



@NgModule({
  declarations: [
    CareerHistoryComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    RouterModule.forChild([
      {
        path: '', component: CareerHistoryComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class CareerHistoryModule { }
