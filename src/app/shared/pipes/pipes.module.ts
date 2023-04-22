import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNamePipe } from './complete-name.pipe';
import { ErrorMessagesPipe } from './error-messages.pipe';



@NgModule({
  declarations: [
    CompleteNamePipe,
    ErrorMessagesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompleteNamePipe,
    ErrorMessagesPipe,
  ],
})
export class PipesModule { }
