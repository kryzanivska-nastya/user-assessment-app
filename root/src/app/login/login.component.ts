import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.apiService.login(credentials).subscribe((response) => {
      localStorage.setItem('token', response.token);
    });
  }
}
