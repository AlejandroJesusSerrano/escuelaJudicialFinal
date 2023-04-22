import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessages'
})
export class ErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    
    const options: Record<string, string> = {

      required: 'Este campo es requerido',
      minlength: `Este campo debe contener al menos ${error.value.requiredLength} caracteres`,
      maxlength: `Este campo solo admite hasta ${error.value.requiredLength} caracteres`,
      pattern: 'La contraseña debe poseer al menos 1 mayúscula y 1 carácter especial (@{}()+-_!...)',
      email: 'el valor debe ser un email válido'

    }

    return options[error.key];
  }

}
