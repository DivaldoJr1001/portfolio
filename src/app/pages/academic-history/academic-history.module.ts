import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavFooterModule } from 'src/app/shared/components/nav-footer/nav-footer.module';
import { AcademicHistoryComponent } from './academic-history.component';



@NgModule({
  declarations: [
    AcademicHistoryComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavFooterModule,
    RouterModule.forChild([
      {
        path: '', component: AcademicHistoryComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class AcademicHistoryModule { }
