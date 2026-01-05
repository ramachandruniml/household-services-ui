import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  pendingBusinesses: any[] = [];

  constructor(private http: HttpClient) {
    this.loadPending();
  }

  loadPending() {
    this.http.get('http://localhost:8000/businesses')
      .subscribe((res: any) => {
        this.pendingBusinesses = res.filter((b: any) => !b.verified);
      });
  }

  verify(id: number) {
    this.http.put(`http://localhost:8000/admin/verify/${id}`, {})
      .subscribe(() => this.loadPending());
  }
}
