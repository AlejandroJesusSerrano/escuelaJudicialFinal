import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DarkModeSwitchModule } from './layout/dark-mode-switch/dark-mode-switch.module';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './pages/home/home.module';
import { StudentsAbmModule } from './pages/students-abm/students-abm.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CoursesModule } from './pages/courses/courses.module';
import { MatCardModule } from '@angular/material/card';

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
    RouterModule,
    MatListModule,
    CoursesModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
