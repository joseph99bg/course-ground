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
  myCourses: ICourse[];
  error = false;

  constructor(private http: HttpClient) { }

  loadAllCourses() {
    return this.http.get<ICourse[]>(`http://localhost:8080/api/course`)
  }

  loadMyCourses() {
    return this.http.get<ICourse[]>('http://localhost:8080/api/course/my-posts', { withCredentials: true });
  }

  loadEnrolledCourses() {
    return this.http.get<ICourse[]>('http://localhost:8080/api/course/enrolled', { withCredentials: true });
  }

  loadSingleCourse(id: string) {
    this.course = undefined;
    return this.http.get<ICourse>(`http://localhost:8080/api/course/${id}`)
    .pipe(
      tap(course => this.course = course)
    );
  }

  addCourse(data) {
    this.http.post('http://localhost:8080/api/course/create', data, { withCredentials: true }).subscribe();
  }

  deleteCourse(courseId) {
    this.http.delete(`http://localhost:8080/api/course/delete/${courseId}`, { withCredentials: true }).subscribe();
  }

  editCourse(data, courseId) {
    this.http.put(`http://localhost:8080/api/course/edit/${courseId}`, data, { withCredentials: true }).subscribe();
  }

  enrollCourse(courseId) {
    this.http.put(`http://localhost:8080/api/course/enroll/${courseId}`, null, { withCredentials: true }).subscribe();
  }
}
