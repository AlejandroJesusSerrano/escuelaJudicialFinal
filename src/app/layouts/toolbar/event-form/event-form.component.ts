import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DateTime, DateTimeService } from 'src/app/core/services/date-time.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {

  dayControl = new FormControl(
    null,
    [
      Validators.required,
    ]
  )
  monthControl = new FormControl(
    null,
    [
      Validators.required,
    ]
  )
  yearControl = new FormControl(
    null,
    [
      Validators.required,
    ]
  )
  hoursControl = new FormControl(
    null,
    [
      Validators.required,
    ]
  )
  minutesControl = new FormControl(
    null,
    [
      Validators.required,
    ]
  )
  detailControl = new FormControl(
    '',
    [
      Validators.required
    ]
  )


  eventForm = new FormGroup ({
    day: this.dayControl,
    month: this.monthControl,
    year: this.yearControl,
    hours: this.hoursControl,
    minutes: this.minutesControl,
    detail: this.detailControl,
  })

  constructor(
    private dialogRef: MatDialogRef<EventFormComponent>,
    private dateTimeService: DateTimeService
    ){

  }

  saveFormData(): void {
    if (this.eventForm.valid) {

      this.dialogRef.close(this.eventForm.value)
      
    } else {

      this.eventForm.markAllAsTouched()

    }

  }

  onSubmit(){
    
    this.dateTimeService.setEvent(this.eventForm.value as unknown as DateTime);

  }
  

}
