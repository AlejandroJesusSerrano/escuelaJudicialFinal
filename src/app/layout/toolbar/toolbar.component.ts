import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  @Input() drawer!: MatDrawer;
  @Output() toggleDrawer = new EventEmitter<void>();

  onToggleSidenav(): void {
    this.toggleDrawer.emit();
  }

}
