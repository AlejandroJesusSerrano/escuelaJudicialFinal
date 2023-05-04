import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students$ = new BehaviorSubject<Student[]>([
    {
      id: 1,
      name: 'Andrea',
      last_name: 'Vitale Diez',
      email: 'andruvit@gmail.com',
      password: 'H0l4Qu3+',
      register_date: new Date(),
      course: 'PROFAMAG',
      homeAddress: 'Barrio Jardines de San Lorenzo, Mz. 4, Lote 1',
      neighborhood: 'Jardines de San Lorenzo',
      city: 'Salta',
      zip: '4401'

    },
    {
      id: 2,
      name: 'Alejandro',
      last_name: 'Serrano',
      register_date: new Date(),
      email: 'alejserrano@gmail.com',
      password: 'H0l4Qu3+',
      course: 'LEY YOLANDA',
      homeAddress: 'Barrio Jardines de San Lorenzo, Mz. 4, Lote 1',
      neighborhood: 'Jardines de San Lorenzo',
      city: 'Salta',
      zip: '4401'
    },
    {
      id: 3,
      name: 'Juan Pablo',
      last_name: 'Acosta Sabatini',
      register_date: new Date(),
      email: 'acostasabatini@yahoo.com.ar',
      password: 'H0l4Qu3+',
      course: 'PROFAMAG',
      homeAddress: 'Barrio Profesionales, Mz. 20, Lote 15',
      neighborhood: 'Jardines de San Lorenzo',
      city: 'Salta',
      zip: '4401'
    },
  ])

  constructor() { }

  takeStudents(): Observable<Student[]> {
    return this.students$.asObservable();
  };

  takeStudentById(id: number): Observable<Student | undefined> {
    return this.students$.asObservable()
    .pipe(
      map((students) => students.find((s) => s.id === id))
    )
  }
};
