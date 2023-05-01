import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DarkModeSwitchModule } from '../layouts/dark-mode-switch/dark-mode-switch.module';
import { ToolbarModule } from '../layouts/toolbar/toolbar.module';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './pages/home/home.module';
import { StudentsAbmModule } from './pages/students-abm/students-abm.module';
import { MatListModule } from '@angular/material/list';
import { CoursesModule } from './pages/courses/courses.module';
import { MatCardModule } from '@angular/material/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToolbarModule,
    DarkModeSwitchModule,
    MatMenuModule,
    HomeModule,
    StudentsAbmModule,
    MatListModule,
    CoursesModule, 
    MatCardModule,
    RouterModule, 
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
