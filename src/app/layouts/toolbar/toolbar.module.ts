import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { DarkModeSwitchModule } from '../dark-mode-switch/dark-mode-switch.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventFormComponent } from './event-form/event-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ToolbarComponent,
    EventFormComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    DarkModeSwitchModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
    MatInputModule,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
