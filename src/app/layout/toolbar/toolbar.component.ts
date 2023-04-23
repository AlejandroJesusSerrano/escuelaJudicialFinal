import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DateTimeService } from '../../core/services/date-time.service';
import { DateTime } from '../../core/services/date-time.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  @Input() drawer!: MatDrawer;
  @Output() toggleDrawer = new EventEmitter<void>();

  // timeNow: DateTime | null = null;
  
  timeNow$: Observable<string>;

  onToggleSidenav(): void {
    this.toggleDrawer.emit();
  }

  constructor(private dateTimeService: DateTimeService) {
    // this.dateTimeService.calendar.subscribe((timeNow) => this.timeNow = timeNow);

    this.timeNow$ = this.dateTimeService.calendar;
  }
}
