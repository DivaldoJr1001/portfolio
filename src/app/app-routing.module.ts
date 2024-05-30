import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum Paths {
  MAIN = 'profile',
  CAREER_HISTORY = 'careerHistory',
  ACADEMIC_HISTORY = 'academicHistory'
}

const routes: Routes = [
  {
    path: Paths.MAIN,
    loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule)

  },
  {
    path: Paths.CAREER_HISTORY,
    loadChildren: () => import('./pages/career-history/career-history.module').then((m) => m.CareerHistoryModule)
  },
  {
    path: Paths.ACADEMIC_HISTORY,
    loadChildren: () => import('./pages/academic-history/academic-history.module').then((m) => m.AcademicHistoryModule)
  },
  {path: '**', redirectTo: Paths.MAIN, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
