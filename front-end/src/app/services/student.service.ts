import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlStudents = 'http://localhost:8080/system/students';
  constructor(private httpStudent: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpStudent.get<Student[]>(this.urlStudents).pipe(
      map( response => response)
    );
  }

  removeStudent(id: number){
    //return this.httpStudent.delete(this.urlStudents + "?id=" + id)
    return this.httpStudent.delete(this.urlStudents + `?id=${id}`)
  }

  addStudent(student: Student){
    return this.httpStudent.post(this.urlStudents, student);
  }

  getStudent(id: number): Observable<Student>{
    return this.httpStudent.get<Student>(`http://localhost:8080/system/student?id=${id}`).pipe(
      map(response => response)
    );
  }

  editStudent(student: Student, id: number){
    return this.httpStudent.put(this.urlStudents + ` ?id=${id}`, student);
  }
  
}


// interface GetResponseStudent {
//   _embedded: {
//     students: Student[]
//   }
// }
