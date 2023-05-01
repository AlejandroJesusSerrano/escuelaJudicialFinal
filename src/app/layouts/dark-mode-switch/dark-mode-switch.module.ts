import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeSwitchComponent } from './dark-mode-switch.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DarkModeSwitchComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  exports: [
    DarkModeSwitchComponent
  ]
})
export class DarkModeSwitchModule { }
