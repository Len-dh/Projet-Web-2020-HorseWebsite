import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class WebsiteAdminService {
  private baseUrl = 'http://localhost:8080/websiteAdmins';

  constructor(private http: HttpClient) {}

  getWebsiteAdmin(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createWebsiteAdmin(websiteAdmin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, websiteAdmin);
  }

  updateWebsiteAdmin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteWebsiteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getWebsiteAdminList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getWebsiteAdminsByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
