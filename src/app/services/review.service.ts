import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  api = 'http://localhost:8000/reviews';

  constructor(private http: HttpClient) { }

  addReview(data: any) {
    return this.http.post(this.api, data);
  }
}
