import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Student } from '../students-abm.component';

@Component({
selector: 'app-abm-formular',
templateUrl: './abm-formular.component.html',
styleUrls: ['./abm-formular.component.scss']
})
export class AbmFormularComponent implements OnInit {

nameControl = new FormControl('', [
Validators.minLength(3),
Validators.maxLength(30),
Validators.required,
]);

lastNameControl = new FormControl('', [
Validators.minLength(3),
Validators.maxLength(30),
Validators.required,
]);

emailControl = new FormControl('', [
Validators.required,
Validators.email,
]);

passwordControl = new FormControl('', [
Validators.required,
// Validators.pattern(/^(?=.[A-Z])(?=.[@$!%+?&-])[A-Za-z\d@$!%?&+-]{6,14}$/),
]);

courseControl = new FormControl('', [
Validators.required,
]);

hAddressControl = new FormControl('', [
Validators.required,
]);

cityControl = new FormControl('', [
Validators.required,
]);

neighControl = new FormControl('', [
Validators.required,
]);

zipControl = new FormControl('', [
Validators.required,
]);

registerDateControl = new FormControl(this.datePipe.transform(new Date(), 'yyyy/MM/dd'));

studentsForm = new FormGroup ({
name: this.nameControl,
last_name: this.lastNameControl,
email: this.emailControl,
password: this.passwordControl,
course: this.courseControl,
homeAddress: this.hAddressControl,
city: this.cityControl,
neighborhood: this.neighControl,
zip: this.zipControl,
register_date: this.registerDateControl,
});
  studentEdit: Student;

constructor(
  private dialogRef: MatDialogRef<AbmFormularComponent>,
  private datePipe: DatePipe,
  @Inject(MAT_DIALOG_DATA) public data: { studentEdit: Student }) { 
    this.studentEdit = data && data.studentEdit ? data.studentEdit : {} as Student;
  }


  ngOnInit(): void {
    if (this.studentEdit) {

      console.log(this.studentEdit);

      this.studentsForm.patchValue({

        name: this.studentEdit.name,
        last_name: this.studentEdit.last_name,
        email: this.studentEdit.email,
        password: this.studentEdit.password,
        course: this.studentEdit.course,
        homeAddress: this.studentEdit.homeAddress,
        city: this.studentEdit.city,
        neighborhood: this.studentEdit.neighborhood,
        zip: this.studentEdit.zip

      });

    }

  };

  saveFormData(): void{
    if (this.studentsForm.valid) {
  
      this.dialogRef.close(this.studentsForm.value)

    } else {

      this.studentsForm.markAllAsTouched()

    }

  }

}



