import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormComponent } from './courses-form/courses-form.component';


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
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.coursesService.takeCourses()
      .subscribe({
        next: (courses) => {
          this.dataSource.data = courses;
        }
      });
  };

  applyFilter(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue.trim().toLowerCase();
  }

  
  openCoursesFormDialog(): void{
    this.dialog.open(CoursesFormComponent)

  }

  editCourse(): void {

  }

  deleteCourse(): void {

  }

  goToCoursesDetails(): void {

  }



  
    
  } 

