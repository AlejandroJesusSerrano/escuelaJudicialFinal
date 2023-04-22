import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer(){
    this.drawer.toggle();
  }

  showFiller = false;
  isChecked = true;

}
