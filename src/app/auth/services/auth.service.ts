import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User, LogInFormValue } from '../models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environmets';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  getAuthUser(): Observable<User | null> {
    console.log('authUser$ value:', this.authUser$.getValue());

    return this.authUser$.asObservable();

  }

  logIn(formValue: LogInFormValue): void {

    this.httpClient.get(
      `${environments.apiBaseUrl}/users`,
      {
        params: {
          ...formValue
        },
      }
    ).subscribe()
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
