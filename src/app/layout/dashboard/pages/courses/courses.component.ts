import { Component, OnInit } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
export interface Course {
  id: number,
  course: string,
  content: string,
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = new Observable<Course[]>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = from(this.coursesService.getCourses()).pipe(
      map(courses => courses.map(course => ({
        ...course, 
        course:'course.course',
        content: 'course.content'
      })))
    );
  } 
}

