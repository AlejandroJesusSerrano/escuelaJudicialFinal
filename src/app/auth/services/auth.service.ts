import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User, LogInFormValue } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUser$ = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) { }

  getAuthUser(): Observable<User | null>{
    console.log('authUser$ value:', this.authUser$.getValue());

    return this.authUser$.asObservable();

  }

  logIn(formValue: LogInFormValue): void {

    const user = {
      id: 1,
      userName: 'Alejandro',
      email: 'alejserrano@gmail.com',
      password: 'Am0rc17016+'
    }
    localStorage.setItem('auth-user', JSON.stringify(user));
    this.authUser$.next(user);
    this.router.navigate(['dashboard']);

    console.log('authUser$ value:', this.authUser$.getValue());
  }

  checkStorage(): void {
    
    const storageValue = localStorage.getItem('auth-user');
    if (storageValue) {
      
      const user = JSON.parse(storageValue);

      this.authUser$.next(user);
      
      this.router.navigate(['auth']);
    
    }
  }

  logout(): void {
    
    localStorage.removeItem('auth-user');
    
    this.authUser$.next(null);
    
    this.router.navigate(['auth']);
    
  }
}
