import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavFooterModule } from 'src/app/shared/components/nav-footer/nav-footer.module';
import { ProjectsComponent } from './projects.component';
import { NavButtonModule } from 'src/app/shared/components/nav-button/nav-button.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NavButtonModule,
    NavFooterModule,
    RouterModule.forChild([
      {
        path: '', component: ProjectsComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
export class ProjectsModule { }
