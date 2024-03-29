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
    this.apiService.login(credentials).subscribe({
      next: (response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        } else {
          console.error('Unexpected response:', response);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
