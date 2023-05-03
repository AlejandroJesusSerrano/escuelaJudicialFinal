import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { CreateCoursePayload, Course } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';



const COURSES_MOCK: Course[] = [
  {
    id: 1,
    course: 'Formacion en Genero / Ley Micaela',
    init_date: new Date(),
    finish_date: new Date(),
    course_detail: 'Este Programa procura brindar las herramientas necesarias para articular los ejes de igualdad de géneros y acceso a la justicia.'
  },
  {
    id: 2,
    course: 'Ley Yolanda',
    init_date: new Date(),
    finish_date: new Date(),
    course_detail: 'El Programa busca garantizar la formación integral en ambiente con perspectiva de desarrollo sostenible.'
  },
  {
    id: 3,
    course: 'PROFAMAG',
    init_date: new Date(),
    finish_date: new Date(),
    course_detail: 'El Programa de Formación para Aspirantes a Magistrados/as brinda herramientas necesarias para el ejercicio del cargo.'
  },
  {
    id: 4,
    course: 'Capacitaciones',
    init_date: new Date(),
    finish_date: new Date(),
    course_detail: 'Cursos de actualización y formación en diversas materias que hacen al ejercicio y el entendimiento de la Justicia.'
  },

]

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

takeCourses(): Observable < Course[] > {
  this.courses$.next(COURSES_MOCK);
  return this.courses$.asObservable();
}

createCourse(payload: CreateCoursePayload): Observable < Course[] > {
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

editCourse(courseId: number, update: Partial<Course>): Observable < Course[] > {
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

deleteCourse(courseId: number): Observable < Course[] > {
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

takeCourseById(id: number): Observable < Course | undefined > {
  return this.courses$.asObservable()
    .pipe(
      map((courses) => courses.find((c) => c.id === id))
    )
<<<<<<< HEAD
}
=======
    }
>>>>>>> 95f87df44017a614ea7755eafaaa0f232aa7da99

}
