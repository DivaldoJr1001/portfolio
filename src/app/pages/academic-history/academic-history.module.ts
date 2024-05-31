import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavFooterModule } from 'src/app/shared/components/nav-footer/nav-footer.module';
import { AcademicHistoryComponent } from './academic-history.component';
import { NavButtonModule } from 'src/app/shared/components/nav-button/nav-button.module';
import { ImageViewerDialogModule } from 'src/app/shared/components/image-viewer-dialog/image-viewer-dialog.module';



@NgModule({
  declarations: [
    AcademicHistoryComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    NavFooterModule,
    ImageViewerDialogModule,
    RouterModule.forChild([
      {
        path: '', component: AcademicHistoryComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class AcademicHistoryModule { }
