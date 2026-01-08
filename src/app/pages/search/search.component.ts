import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessService } from '../../services/business.service';

interface Business { name: string; service_type?: string; location?: string; }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [BusinessService]
})
export class SearchComponent {
  service = '';
  location = '';
  results: Business[] = [];
  loading = false;

  constructor(private businessService: BusinessService) {}

  search() {
    const service = this.service.trim();
    const location = this.location.trim();
    if (!service || !location) return;

    this.loading = true;
    this.results = [];

    this.businessService.searchBusinesses(service, location).subscribe({
      next: data => {
        const items = Array.isArray(data) ? data : [data];
        this.results = items.map(d => this.toBusiness(d));
        this.loading = false;
        console.log('Results:', this.results);
      },
      error: error => {
        console.error('Error fetching search results:', error);
        this.loading = false;
      }
    });
  }

  private toBusiness(d: any): Business {
    const name = d?.name ?? d?.business_name ?? d?.company ?? 'Unknown';
    const service_type = d?.service_type ?? d?.service ?? d?.type ?? '';
    const locationParts = [
      d?.location,
      d?.address,
      d?.city,
      d?.state,
      d?.postal_code,
      d?.zip
    ].filter(Boolean);
    const location = locationParts.length ? locationParts.join(', ') : '';
    return { name, service_type, location };
  }
}
