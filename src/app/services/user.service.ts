import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    // Adjust URL to your backend auth endpoint if needed
    return this.http.post('/api/auth/login', credentials);
  }
}