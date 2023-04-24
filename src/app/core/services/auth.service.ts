import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUser$ = new Subject<User>();

  constructor() { }

  getAuthUser(): Observable<User>{

    return this.authUser$.asObservable();

  }

  logIn(user: User): void {
    this.authUser$.next(user);
  }
}
