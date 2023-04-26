import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlStudents = 'http://localhost:8080/api/students';
  constructor(private httpStudent: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpStudent.get<GetResponseStudent>(this.urlStudents).pipe(
      map( response => response._embedded.students)
    );
  }
}

interface GetResponseStudent {
  _embedded: {
    students: Student[]
  }
}
