import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { StudentsAbmComponent } from './pages/students-abm/students-abm.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
        {path: 'home', component: HomeComponent},
        {path: 'students', component: StudentsAbmComponent},
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
