import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true, 
  imports:[FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  service = '';
  location = '';
  results: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  search() {
    if (!this.service || !this.location) return;

    this.loading = true;

    this.http
      .get<any[]>(
        `http://localhost:8000/businesses/search?service=${this.service}&location=${this.location}`
      )
      .subscribe({
        next: (res) => {
          this.results = res;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
