import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private jsonUrl = 'assets/students.json';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.jsonUrl);
  }
}
