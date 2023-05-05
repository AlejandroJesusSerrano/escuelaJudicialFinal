import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmFormularComponent } from './abm-formular/abm-formular.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from './services/students.service'
import { Student } from './models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-abm',
  templateUrl: './students-abm.component.html',
  styleUrls: ['./students-abm.component.scss']
})

export class StudentsAbmComponent {

  dataSource = new MatTableDataSource<Student>();

  displayedColumns: string[] = [
    'id',
    'completeName',
    'register_date',
    'email',
    'course',
    'address',
    'city',
    'delete'
  ];

  students$: any;
  
  applyFilter(ev: Event): void {

    const inputValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue.trim().toLowerCase();

  };

  
  constructor(
    private formDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    ) { }

    private studentsSubscription: Subscription = new Subscription();

    ngOnInit(){
      this.studentsService.students.subscribe({
        next: (students) => {
          this.dataSource.data = students
        }
      })
      
      this.studentsService.getStudents()
    }

    ngOnDestroy(): void {
      this.studentsSubscription.unsubscribe();
    }

    goToStudentDetails(studentId: number): void {
      this.router.navigate([studentId],{
        relativeTo: this.activatedRoute
      })
    }

  deleteStudent(student: number): void {

    this.studentsService.deleteStudent(student.id)

    };
  };

  openStudentFormDialog(): void {

    // const lastId = this.dataSource.data[this.dataSource.data.length - 1]?.id || 0;
    const dialog = this.formDialog.open(AbmFormularComponent);

    dialog.afterClosed().subscribe((value) => {

      if (value) {

        this.dataSource.data = [...this.dataSource.data, {
          ...value,
          register_date: new Date(),
          id: this.dataSource.data.length + 1,
        },

        ];

      }

    });

  };

  editStudent(studentEdit: Student): void {
    console.log('Student edit:', studentEdit)

    const dialog = this.formDialog.open(AbmFormularComponent, {

      data: {
        studentEdit
      }

    });

    dialog.afterClosed().subscribe((dataEditedStudent) => {

      if (dataEditedStudent) {
        this.dataSource.data = this.dataSource.data.map(
          (student) => student.id === studentEdit.id
            ? ({ ...student, ...dataEditedStudent })
            : student,
        );

      };

    });

  };

};

