import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessService } from '../../services/business.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-business.component.html'
})
export class CreateBusinessComponent {
  name = '';
  service = '';
  location = '';
  success = '';
  error = '';

  constructor(private businessService: BusinessService) {}

  submit() {
    if (!this.name || !this.service || !this.location) {
      this.error = 'All fields are required';
      return;
    }

    this.businessService.createBusiness({
      name: this.name,
      service: this.service,
      location: this.location
    }).subscribe({
      next: () => {
        this.success = 'Business submitted for verification!';
        this.error = '';
        this.name = '';
        this.service = '';
        this.location = '';
      },
      error: () => {
        this.error = 'Failed to submit business';
        this.success = '';
      }
    });
  }
}

