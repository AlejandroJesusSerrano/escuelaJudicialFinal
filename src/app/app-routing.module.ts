import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { StudentsAbmComponent } from './layout/dashboard/pages/students-abm/students-abm.component';
import { HomeComponent } from './layout/dashboard/pages/home/home.component';
import { CoursesComponent } from './layout/dashboard/pages/courses/courses.component';
import { InscriptionsComponent } from './layout/dashboard/pages/inscriptions/inscriptions.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
        {path: 'home', component: HomeComponent},
        {path: 'students', component: StudentsAbmComponent},
        {path: 'courses', component: CoursesComponent},
        {path: 'inscriptions', component: InscriptionsComponent}
      ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
