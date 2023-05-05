import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { CreateCoursePayload, Course } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private courses$ = new BehaviorSubject<Course[]>([]);

  courseApi: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  get courses(): Observable<Course[]> {
    return this.courses$.asObservable();
  }

  getCourses(): void {
    this.httpClient.get<Course[]>(`${environment.apiBaseUrl}/courses`)
      .subscribe({
        next: (courses) => {
          this.courses$.next(courses)
        }
      })
  }

  createCourse(payload: CreateCoursePayload): Observable<Course[]> {
    this.courses$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (courses) => {
          this.courses$.next([
            ...courses,
            {
              id: courses.length + 1,
              ...payload,
            },
          ]);
        },
        complete: () => { },
        error: () => { }
      });

    return this.courses$.asObservable();

  }

  editCourse(courseId: number, update: Partial<Course>): Observable<Course[]> {
    this.courses$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (courses) => {

          const coursesEdited = courses.map((course) => {
            if (course.id === courseId) {
              return {
                ...course,
                ...update,
              }
            } else {
              return course;
            }
          })

          this.courses$.next(coursesEdited)
        },
        complete: () => { },
        error: () => { }
      });
    return this.courses$.asObservable()
  };

  deleteCourse(courseId: number): Observable<Course[]> {
    this.courses$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (courses) => {

          const coursesEdited = courses.filter((course) => course.id !== courseId)

          this.courses$.next(coursesEdited)
        },
        complete: () => { },
        error: () => { }
      });
    return this.courses$.asObservable()
  };

  takeCourseById(id: number): Observable<Course | undefined> {
    return this.courses$.asObservable()
      .pipe(
        map((courses) => courses.find((c) => c.id === id))
      )
  }
}
