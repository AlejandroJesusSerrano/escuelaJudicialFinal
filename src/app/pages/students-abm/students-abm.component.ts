import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmFormularComponent } from './abm-formular/abm-formular.component';
import { DateTimeService } from 'src/app/core/services/date-time.service';
import { Subscription } from 'rxjs';



export interface Student {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  register_date: Date;
  course: string;
  homeAddress: string;
  city: string;
  neighborhood: string;
  zip: string;
};

@Component({
  selector: 'app-students-abm',
  templateUrl: './students-abm.component.html',
  styleUrls: ['./students-abm.component.scss']
})

export class StudentsAbmComponent {
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  students: Student[] = [
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
  ];

  displayedColumns: string[] = ['id', 'completeName', 'register_date', 'email', 'course', 'address', 'city', 'delete'];

  dataSource = new MatTableDataSource(this.students);

  applyFilter(ev: Event): void {

    const inputValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue.trim().toLowerCase();

  };

  deleteStudent(studentId: number): void {

    const index = this.dataSource.data.findIndex(student => student.id === studentId);

    if (index !== -1) {

      this.dataSource.data.splice(index, 1)[0];
      this.dataSource.data = [...this.dataSource.data];

    };
  };

  dateTimeNowStandard: string | null = null

  subscriptionRef: Subscription | null


  constructor(
    private formDialog: MatDialog,
    private dateTimeService: DateTimeService
  ) {
    this.subscriptionRef = this.dateTimeService.calendar.subscribe((value) => this.dateTimeNowStandard = value);
  }

  ngOnDestroy(): void {
    this.subscriptionRef?.unsubscribe();
  }

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

