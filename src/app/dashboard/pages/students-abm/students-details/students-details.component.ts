import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../core/services/students.service';
import { Student } from '../students-abm.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent {

  student: Student | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private location: Location
  ) {
    this.studentsService.takeStudentById(parseInt(this.activatedRoute.snapshot.params['id']))
    .subscribe((student) => this.student = student)
  }

  goBack():void {
    this.location.back()
  }

}
