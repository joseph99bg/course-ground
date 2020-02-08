import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../shared/interfaces/course';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: ICourse[];
  course: ICourse;
  error = false;

  constructor(private http: HttpClient) { }

  loadAllCourses() {
    this.http.get<ICourse[]>('http://localhost:8080/api/course').subscribe(courses => {
      this.courses = courses;
    });
  }

  loadSingleCourse(id: string) {
    this.course = undefined;
    return this.http.get<ICourse>(`http://localhost:8080/api/course/${id}`)
    .pipe(
      tap(course => this.course = course)
    );
  }
}
