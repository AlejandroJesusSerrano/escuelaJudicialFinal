import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, take } from 'rxjs';
import { CreateStudentPayload, Student } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private students$ = new BehaviorSubject<Student[]>([]);

  studentApi: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  get students(): Observable<Student[]> {
    return this.students$.asObservable();
  }

  getStudents(): void {
    this.httpClient.get<Student[]>(`${environment.apiBaseUrl}/students`)
      .subscribe({
        next: (students) => {
          this.students$.next(students)
        }
      })
  }

  createStudent(payload: CreateStudentPayload): Observable<Student[]> {
    this.students$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (students) => {
          this.students$.next([
            ...students,
            {
              id: students.length + 1,
              ...payload,
            },
          ]);
        },
        complete: () => { },
        error: () => { }
      });

    return this.students$.asObservable();

  }

  editStudent(studentId: number, update: Partial<Student>): Observable<Student[]> {
    this.students$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (students) => {

          const studentsEdited = students.map((student) => {
            if (student.id === studentId) {
              return {
                ...student,
                ...update,
              }
            } else {
              return student;
            }
          })

          this.students$.next(studentsEdited)
        },
        complete: () => { },
        error: () => { }
      });
    return this.students$.asObservable()
  };

  deleteStudent(studentId: number): Observable<Student[]> {
    this.students$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (students) => {

          const studentsEdited = students.filter((course) => course.id !== studentId)

          this.students$.next(studentsEdited)
        },
        complete: () => { },
        error: () => { }
      });
    return this.students$.asObservable()
  };

  getStudentById(id: number): Observable<Student | undefined> {
    return this.students$.asObservable()
    .pipe(
      map((students) => students.find((s) => s.id === id))
    )
  }
};
