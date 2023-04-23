import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs';

export interface DateTime {

  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;

}

@Injectable({
  providedIn: 'root'
})

export class DateTimeService {

  private _calendar$ = new BehaviorSubject<DateTime>(this.currentTime);

  constructor() {
    setInterval(() => {
      this._calendar$.next(this.currentTime)
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
    }
  }
}
