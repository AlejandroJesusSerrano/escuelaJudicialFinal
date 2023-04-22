import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    PipesModule,
    DirectivesModule
  ]
})
export class SharedModule { }
