import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CareerHistoryComponent } from './pages/career-history/career-history.component';

export enum Paths {
  MAIN = '',
  CAREER_HISTORY = 'careerHistory'
}

const routes: Routes = [
  {
    path: Paths.MAIN,
    component: MainPageComponent,
    data: { animation: 'MainPage' }
  },
  {
    path: Paths.CAREER_HISTORY,
    component: CareerHistoryComponent,
    data: { animation: 'WorkPage' }
  },
  {path: '**', redirectTo: Paths.MAIN, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
