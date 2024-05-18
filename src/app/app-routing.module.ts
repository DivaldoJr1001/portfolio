import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfessionalHistoryComponent } from './pages/professional-history/professional-history.component';

export enum Paths {
  MAIN = '',
  PROFESSIONAL_HISTORY = 'professionalHistory'
}

const routes: Routes = [
  {
    path: Paths.MAIN,
    component: MainPageComponent
  },
  {
    path: Paths.PROFESSIONAL_HISTORY,
    component: ProfessionalHistoryComponent
  },
  {path: '**', redirectTo: Paths.MAIN, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
