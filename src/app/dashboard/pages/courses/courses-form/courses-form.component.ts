import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {
  courseControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.required,
  ]);

  init_dateControl = new FormControl('', [
    Validators.required,
  ]);

  finish_dateControl = new FormControl('', [
    Validators.required,
  ]);

  course_detailControl = new FormControl('', [
    Validators.required,
  ]);

  registerDateControl = new FormControl(this.datePipe.transform(new Date(), 'yyyy/MM/dd'));

  coursesForm = new FormGroup({
    course: this.courseControl,
    initialDate: this.init_dateControl,
    finishDate: this.finish_dateControl,
    detail: this.course_detailControl,
  });

  courseEdit: Course;

  constructor(
    private dialogRef: MatDialogRef<CoursesFormComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: { courseEdit: Course }) {
    this.courseEdit = data && data.courseEdit ? data.courseEdit : {} as Course;
  }


  // ngOnInit(): void {
  //   if (this.coursesEdit) {

  //     console.log(this.coursesEdit);

  //     this.coursesForm.patchValue({

  //       course: this.courseControl,
  //       initialDate: this.init_dateControl,
  //       finishDate: this.finish_dateControl,
  //       detail: this.course_detailControl,

  //     });

  //   }

  // };

  saveFormData(): void {
    if (this.coursesForm.valid) {

      this.dialogRef.close(this.coursesForm.value)

    } else {

      this.coursesForm.markAllAsTouched()

    }

  }

}
