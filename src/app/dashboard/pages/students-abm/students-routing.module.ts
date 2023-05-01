import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsAbmComponent } from './students-abm.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      [
        {
          path: '',
          component: StudentsAbmComponent,
        },
        {
          path: ':id',
          component: StudentsDetailsComponent,
        }
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }
