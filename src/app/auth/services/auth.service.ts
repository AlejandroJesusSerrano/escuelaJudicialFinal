import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, catchError, throwError } from 'rxjs';
import { User, LogInFormValue } from '../models';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  getAuthUser(): Observable<User | null> {

    return this.authUser$.asObservable();

  }

  logIn(formValue: LogInFormValue): void {

    this.httpClient.get<User[]>(
      `${environment.apiBaseUrl}/users`,
      {
        params: {
          ...formValue
        },
      }
    ).subscribe({
      next: (users) => {

        const userAuthenticated = users[0];

        if (userAuthenticated) {
          localStorage.setItem('token', userAuthenticated.token)
          this.authUser$.next(userAuthenticated);
          this.router.navigate(['dashboard']);
        }
      }
    })
  }

  checkToken(): Observable<boolean> {

    const token = localStorage.getItem('token');

    return this.httpClient.get<User[]>(`${environment.apiBaseUrl}/users?token=${token}`,
      {
        headers: new HttpHeaders({
          'Authorization': token || '',
        }),
      }
    )
      .pipe(
        map((users) => {

          const userAuthenticated = users[0];

          if (userAuthenticated) {
            localStorage.setItem('token', userAuthenticated.token),
              this.authUser$.next(userAuthenticated);
          }
          return !!userAuthenticated;
        }),
        catchError((err) => {
          alert ('Lo sentimos, ¡Ha ocurrido un error!');
          return throwError(() => err)
        })
      );
  }


  logout(): void {

    localStorage.removeItem('token');

    this.authUser$.next(null);

    this.router.navigate(['auth']);

  }
}
