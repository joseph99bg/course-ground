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

  loadAllCourses(limit?) {
    this.http.get<ICourse[]>(`http://localhost:8080/api/course${limit ? `?limit=${limit}` : ''}`).subscribe(courses => {
      this.courses = courses;
    });
  }

  loadMyCourses() {
    const userId = localStorage.getItem('current-user-id');
    const body = {
      userId
    }
    this.http.post<ICourse[]>('http://localhost:8080/api/course/my-posts', body).subscribe(courses => {
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

  addCourse(data) {
    const userId = localStorage.getItem('current-user-id');
    this.http.post('http://localhost:8080/api/course/create', {...data, userId}).subscribe();
  }

  deleteCourse(courseId) {
    const userId = localStorage.getItem('current-user-id');
    this.http.delete(`http://localhost:8080/api/course/delete/${courseId}`).subscribe();
  }

  editCourse(data, courseId) {
    this.http.put(`http://localhost:8080/api/course/edit/${courseId}`, data).subscribe();
  }
}
