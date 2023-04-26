import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAbmComponent } from './dashboard/pages/students-abm/students-abm.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { InscriptionsComponent } from './dashboard/pages/inscriptions/inscriptions.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { StudentsDetailsComponent } from './dashboard/pages/students-abm/students-details/students-details.component';
import { WelcomeComponent } from './auth/pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
        { path: 'home', component: HomeComponent },
        {
          path: 'students',
          children: [
            {
              path: '',
              component: StudentsAbmComponent,
            },
            {
              path: ':id',
              component: StudentsDetailsComponent,
            }
          ]
        },
        { path: 'courses', component: CoursesComponent },
        { path: 'inscriptions', component: InscriptionsComponent },
        { path: '**', redirectTo: 'home' },
      ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
