import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CareerHistoryComponent } from './pages/career-history/career-history.component';
import { AcademicHistoryComponent } from './pages/academic-history/academic-history.component';

export enum Paths {
  MAIN = '',
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
