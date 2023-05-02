import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  
  course: Course | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private location: Location
  ) {
    this.courseService.takeCourseById(parseInt(this.activatedRoute.snapshot.params['id']))
    .subscribe((course) => this.course = course)
  }

  goBack():void {
    this.location.back()
  }

}

