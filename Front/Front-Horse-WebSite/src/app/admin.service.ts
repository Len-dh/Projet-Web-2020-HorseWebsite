import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/admins';

  constructor(private http: HttpClient) {}

  getAdmin(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, admin);
  }

  updateAdmin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAdminList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAdminsByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
