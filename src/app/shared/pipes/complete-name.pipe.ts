import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/dashboard/pages/students-abm/students-abm.component';


@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {

    const newValue = `${value.name} ${value.last_name}`
    
    switch (args[0]){
      case 'mayus':
        return newValue.toUpperCase();
      case 'minus':
        return newValue.toLowerCase();
      default:
        return newValue;
    }

  }

}
