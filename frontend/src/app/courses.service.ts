import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from './shared/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: ICourse[];

  constructor(private http: HttpClient) { }

  loadAllCourses() {
    this.http.get<ICourse[]>('http://localhost:8080/api/course').subscribe(courses => {
      this.courses = courses;
    });
  }
}
