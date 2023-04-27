import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule, 
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
