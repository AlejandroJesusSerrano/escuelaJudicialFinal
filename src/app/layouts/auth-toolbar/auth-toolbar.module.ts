import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthToolbarComponent } from './auth-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DarkModeSwitchModule } from '../dark-mode-switch/dark-mode-switch.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DarkModeSwitchModule,
    MatToolbarModule,
  ],
  exports: [
    AuthToolbarComponent
  ]
  
})
export class AuthToolbarModule { }
