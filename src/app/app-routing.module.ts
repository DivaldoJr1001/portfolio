import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export enum Paths {
  MAIN = ''
}

const routes: Routes = [
  {
    path: Paths.MAIN,
    component: MainPageComponent
  },
  {path: '**', redirectTo: Paths.MAIN, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
