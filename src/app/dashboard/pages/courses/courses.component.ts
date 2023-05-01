import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './models';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = [
    'id',
    'course',
    'init_date',
    'finish_date',
    'actions'
  ]
  courses$: any;
  
  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.coursesService.takeCourses()
      .subscribe({
        next: (courses) => {
          this.dataSource.data = courses;
        }
      });

      this.coursesService.getCourses().subscribe( (m) => {
        console.log (m)
      } )
  };

  applyFilter(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue.trim().toLowerCase();
  }

  
  createCourses(): void{
    const dialog = this.dialog.open(CoursesFormComponent)

    dialog.afterClosed()
    .subscribe((formValue) => {
      
      if (formValue){

        this.coursesService.createCourse(formValue);

      }
    })

  }

  editCourse(course: Course): void {
    const dialog = this.dialog.open(CoursesFormComponent, {
      data: {
        course, 
      }
    });
    dialog.afterClosed()
    .subscribe((formValue) => {
      if (formValue) {
        this.coursesService.editCourse(course.id, formValue);
      }
    });

  }

  deleteCourse(course: Course): void {
    
    this.coursesService.deleteCourse(course.id)
  } 

  goToCoursesDetails(courseId: number): void {
    this.router.navigate([courseId],{
      relativeTo: this.activatedRoute
    })

  }
} 

