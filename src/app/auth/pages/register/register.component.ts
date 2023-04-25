import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  hide = true;

  isLoggedIn = new Subject<User>();
  notifier = new Subject<string>();

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.required,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[A-Z])(?=.*[@$!%*+?&-])[A-Za-z\\d@$!%*+?&-]{6,14}$'),

  ]);

  registerForm = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
    password: this.passwordControl,
  })

  constructor(
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  registerUser(): void {

    this.notificationService.showMsg('¡El usuario ha sido creado exitosamente!')
    this.router.navigate(['auth', 'login'])

  }

}
