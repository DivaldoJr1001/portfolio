import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavFooterModule } from 'src/app/shared/components/nav-footer/nav-footer.module';
import { CareerHistoryComponent } from './career-history.component';



@NgModule({
  declarations: [
    CareerHistoryComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavFooterModule,
    RouterModule.forChild([
      {
        path: '', component: CareerHistoryComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class CareerHistoryModule { }
