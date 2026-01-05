import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../services/api.config';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${API_URL}/auth/login`, {
      email,
      password
    }).pipe(
      tap(res => localStorage.setItem('token', res.access_token))
    );
  }

  register(email: string, password: string) {
    return this.http.post(`${API_URL}/auth/register`, {
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
