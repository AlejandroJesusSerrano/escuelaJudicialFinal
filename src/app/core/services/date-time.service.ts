import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs';
import Swal from 'sweetalert2';

export interface DateTime {

  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
  detail: string;

}

@Injectable({
  providedIn: 'root'
})

export class DateTimeService {

  private _calendar$ = new BehaviorSubject<DateTime>(this.currentTime);
  private establishedEvent: DateTime | null = null;

  constructor() {
    setInterval(() => {

      this._calendar$.next(this.currentTime)
      this.verifyEvent()

    }, 1000)
  }

  get calendar(): Observable<string> {
    return this._calendar$.asObservable()
    .pipe (
      map ((dateTime) => {
        return `Fecha: ${dateTime.day}/${dateTime.month}/${dateTime.year} Hora: ${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`
      } )
    )
  }

  get currentTime(): DateTime {

    const now = new Date();

    return {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      detail: ''
    }
  }

  verifyEvent():void {
    if (this.establishedEvent) {
      
      if (
        this.establishedEvent.day === this.currentTime.day
        && this.establishedEvent.month === this.currentTime.month
        && this.establishedEvent.year === this.currentTime.year
        && this.establishedEvent.hours === this.currentTime.hours
        && this.establishedEvent.minutes === this.currentTime.minutes
        && this.establishedEvent.seconds === this.currentTime.seconds
        ) {
          Swal.fire({
            title: `Tiene un Evento Pendiente: ${this.currentTime.hours}:${this.currentTime.minutes}`,
            text:  this.establishedEvent.detail,
            icon: 'warning',
            iconColor: '#90caf9',
            confirmButtonColor: '#0d47a1',
          })
        }
    }
  }

  setEvent(event: Omit<DateTime, 'seconds'>) {
    this.establishedEvent = {...event, seconds:0};
  }
}
