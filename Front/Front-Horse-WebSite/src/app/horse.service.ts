import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorseService {
  private baseUrl = 'http://localhost:8080/horses';

  constructor(private http: HttpClient) {}

  getHorse(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHorse(horse: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, horse);
  }

  updateHorse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHorse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHorseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getHorsesByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
