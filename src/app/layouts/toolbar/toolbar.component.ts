import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DateTimeService } from '../../core/services/date-time.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EventFormComponent } from './event-form/event-form.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  @Input() drawer!: MatDrawer;
  @Output() toggleDrawer = new EventEmitter<void>();

  timeNow$: Observable<string>;
  eventFormData: any[] = [];

  onToggleSidenav(): void {
    this.toggleDrawer.emit();
  }

  constructor(
    private formDialog: MatDialog,
    private dateTimeService: DateTimeService
    ) {

    this.timeNow$ = this.dateTimeService.calendar;
  }

  openEventFormDialog(): void {

    const dialog = this.formDialog.open(EventFormComponent);

    dialog.afterClosed().subscribe(
      (value) => {

        if (value) {

          this.eventFormData.push(value);

        }
      }
    );
  }

};

