import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService)

  isLoggedIn: Observable<boolean> = this.authService.isAuthenticated()

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
