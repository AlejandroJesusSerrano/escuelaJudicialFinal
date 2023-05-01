import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime, map, tap } from 'rxjs';
import { LogInFormValue, User } from 'src/app/auth/models';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  isLoggedIn = new Subject<User>();
  notifier = new Subject<string>();

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userNameControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.required,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[A-Z])(?=.*[@$!%*+?&-])[A-Za-z\\d@$!%*+?&-]{6,14}$'),

  ]);

  logInForm = new FormGroup({
    userName: this.userNameControl,
    email: this.emailControl,
    password: this.passwordControl,
  })

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }
  
  logIn(): void {
    
    if (this.logInForm.invalid) {
        this.logInForm.markAllAsTouched();
      } else {
      this.authService.logIn(this.logInForm.value as LogInFormValue)
      this.logInUser()
    
    }

  }

  hearChangesInEmailControl(): void {
    this.emailControl.valueChanges
    .pipe(
      tap((v:string | null) => {
        console.log(v)
        debounceTime(5000)
      }),
      map((v) => v?.toUpperCase),
      debounceTime(1000)
    )
    .subscribe((value) => console.log(value));
  }

  logInUser(): void {

    this.notificationService.showMsg('¡Ingreso exitoso!')
    this.router.navigate(['dashboard', 'students'])

  }

  goToRegister(): void {
    this.router.navigate(['auth', 'register'])
  }

}
