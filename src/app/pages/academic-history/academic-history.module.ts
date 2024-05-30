import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicHistoryComponent } from './academic-history.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavButtonModule } from 'src/app/shared/components/nav-button/nav-button.module';



@NgModule({
  declarations: [
    AcademicHistoryComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    RouterModule.forChild([
      {
        path: '', component: AcademicHistoryComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class AcademicHistoryModule { }
