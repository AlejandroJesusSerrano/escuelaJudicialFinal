import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesService } from 'src/app/core/services/courses.service';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
