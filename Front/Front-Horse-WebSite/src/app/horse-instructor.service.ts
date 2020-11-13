import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HorseInstructorService {
  private baseUrl = 'http://localhost:8080/horse-instructors';

  constructor(private http: HttpClient) {}

  getHorseInstructor(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHorseInstructor(horseInstructor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, horseInstructor);
  }

  updateHorseInstructor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHorseInstructor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHorseInstructorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getHorseInstructorsByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
