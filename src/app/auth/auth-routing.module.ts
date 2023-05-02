import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      [
        { path: '', component: WelcomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: '**', redirectTo: 'auth' }
      ]
    )
    ],
    exports: [
      RouterModule,
    ]
})
export class AuthRoutingModule { }
