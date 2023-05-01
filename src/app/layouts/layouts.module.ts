import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthToolbarModule } from './auth-toolbar/auth-toolbar.module';
import { DarkModeSwitchModule } from './dark-mode-switch/dark-mode-switch.module';
import { ToolbarModule } from './toolbar/toolbar.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthToolbarModule,
    DarkModeSwitchModule,
    ToolbarModule,
  ]
})

export class LayoutsModule { }
