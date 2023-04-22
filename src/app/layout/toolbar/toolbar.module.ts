import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { DarkModeSwitchModule } from '../dark-mode-switch/dark-mode-switch.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    DarkModeSwitchModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
