import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import links from './nav-items';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer(){
    this.drawer.toggle();
  }

  authUserObs$: Observable<User>

  destroyed$ = new Subject<void>();

  showFiller = false;
  isChecked = true;

  links = links

  constructor (
    private authService: AuthService,
    private router: Router
  ) {

    this.authUserObs$ = this.authService.getAuthUser()

  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  logout(): void {
    this.router.navigate(['auth', 'login'])
  }

  register(): void {
    this.router.navigate(['auth', 'register'])
  }

}
