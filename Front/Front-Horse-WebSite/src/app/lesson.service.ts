import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private baseUrl = 'http://localhost:8080/lessons';

  constructor(private http: HttpClient) {}

  getLesson(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLesson(lesson: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, lesson);
  }

  updateLesson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLesson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLessonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLessonsByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: 'text',
    });
  }
}
