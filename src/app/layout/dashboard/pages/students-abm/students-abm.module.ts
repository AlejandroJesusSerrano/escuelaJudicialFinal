import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StudentsAbmComponent } from './students-abm.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AbmFormularComponent } from './abm-formular/abm-formular.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    StudentsAbmComponent,
    AbmFormularComponent,
    StudentsDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    DirectivesModule,
    MatCardModule
  ],
  exports: [
    StudentsAbmComponent,
  ],
  providers: [
    DatePipe,
  ]
  
})
export class StudentsAbmModule { }
