import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BusinessService } from '../../services/business.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 IMPORTANT
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  businesses: any[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.businessService.getBusinesses().subscribe(data => {
      this.businesses = data;
    });
  }
}
