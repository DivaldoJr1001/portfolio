import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum Paths {
  MAIN = 'profile',
  CAREER_HISTORY = 'careerHistory',
  ACADEMIC_HISTORY = 'academicHistory',
  COMPLEMENTARY_EDUCATION = 'complementaryEducation',
  PROJECTS = 'projects'
}

const routes: Routes = [
  {
    path: Paths.MAIN,
    loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule),
    data: { animationState: Paths.MAIN }
  },
  {
    path: Paths.CAREER_HISTORY,
    loadChildren: () => import('./pages/career-history/career-history.module').then((m) => m.CareerHistoryModule),
    data: { animationState: Paths.CAREER_HISTORY }
  },
  {
    path: Paths.ACADEMIC_HISTORY,
    loadChildren: () => import('./pages/academic-history/academic-history.module').then((m) => m.AcademicHistoryModule),
    data: { animationState: Paths.ACADEMIC_HISTORY }
  },
  {
    path: Paths.COMPLEMENTARY_EDUCATION,
    loadChildren: () => import('./pages/complementary-education/complementary-education.module').then((m) => m.ComplementaryEducationModule),
    data: { animationState: Paths.COMPLEMENTARY_EDUCATION }
  },
  {
    path: Paths.PROJECTS,
    loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
    data: { animationState: Paths.PROJECTS }
  },
  {path: '**', redirectTo: Paths.MAIN, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
