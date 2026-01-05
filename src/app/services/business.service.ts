import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api.config';

@Injectable({ providedIn: 'root' })
export class BusinessService {

  constructor(private http: HttpClient) {}

  getBusinesses() {
    return this.http.get<any[]>(`${API_URL}/businesses`);
  }

  createBusiness(data: any) {
    return this.http.post(`${API_URL}/businesses`, data);
  }

  getPendingBusinesses() {
    return this.http.get<any[]>(`${API_URL}/admin/pending`);
  }

  verifyBusiness(id: number) {
    return this.http.post(`${API_URL}/admin/verify/${id}`, {});
  }
  searchBusinesses(service: string, location: string) {
  return this.http.get<any[]>(
    `http://127.0.0.1:8000/businesses/search`,
    {
      params: {
        service,
        location
      }
    }
  );
  }
}
