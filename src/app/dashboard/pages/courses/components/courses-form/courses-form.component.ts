import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



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
    init_date: this.init_dateControl,
    finish_date: this.finish_dateControl,
    course_detail: this.course_detailControl,
  });

  constructor(
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<CoursesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
    if (data) {
      const courseToEdit = data.course;
      this.courseControl.setValue(courseToEdit.course);
      this.init_dateControl.setValue(courseToEdit.init_date);
      this.finish_dateControl.setValue(courseToEdit.finish_date);
      this.course_detailControl.setValue(courseToEdit.course_detail);
      
      }
  }

  saveFormData(): void {
    if (this.coursesForm.valid) {
      console.log(this.coursesForm.value)
      this.dialogRef.close(this.coursesForm.value)

    } else {

      this.coursesForm.markAllAsTouched()

    }

  }

}
