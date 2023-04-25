import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private message$ = new Subject()

  constructor() {
    this.message$.subscribe((msg) => 
      Swal.fire ({
        title: '¡Bienvenido!',
        text: `${msg}`,
        icon: 'success',
        confirmButtonColor: '#3f51b5',
        iconColor: '#3f51b5'})
    )
  }

  showMsg(msg: string){
    this.message$.next(msg);
  };
}
