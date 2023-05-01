import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthToolbarModule } from '../layouts/auth-toolbar/auth-toolbar.module';
import { DarkModeSwitchModule } from '../layouts/dark-mode-switch/dark-mode-switch.module';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    PipesModule,
    MatToolbarModule,
    MatCardModule,
    AuthRoutingModule,
    AuthToolbarModule,
    DarkModeSwitchModule,
  ],
  exports: [
    RegisterComponent,
    AuthComponent,
  ]
})
export class AuthModule { }
