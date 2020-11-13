import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RiderService {
  private baseUrl = 'http://localhost:8080/riders';

  constructor(private http: HttpClient) {}

  getRider(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRider(rider: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, rider);
  }

  updateRider(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRider(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRiderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getRidersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
