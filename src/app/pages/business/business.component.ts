import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-business',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: any;
  reviewText = '';
  rating = 5;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:8000/businesses`).subscribe((res: any) => {
      this.business = res.find((b: any) => b.id == id);
    });
  }

  submitReview() {
    const data = {
      rating: this.rating,
      comment: this.reviewText,
      business_id: this.business.id
    };
    this.reviewService.addReview(data).subscribe(() => {
      alert('Review added!');
    });
  }
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private http: HttpClient) {}
  addReview(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/reviews', data);
  }
}
