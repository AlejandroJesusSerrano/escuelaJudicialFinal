import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsAbmComponent } from './pages/students-abm/students-abm.component';
import { StudentsDetailsComponent } from './pages/students-abm/students-details/students-details.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesDetailsComponent } from './pages/courses/components/courses-details/courses-details.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      [

            { path: '', component: HomeComponent },
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
            { 
              path: 'courses',
              children: [
                {
                  path: '',
                  component: CoursesComponent
                },
                {
                  path: ':id',
                  component: CoursesDetailsComponent
                }
              ]
            },
            { path: 'inscriptions', component: InscriptionsComponent },
            { path: '**', redirectTo: 'home' },
          ]
    )
  ]
})
export class DashboardRoutingModule { }
