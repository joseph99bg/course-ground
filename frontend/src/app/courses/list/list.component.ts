import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myCourses = this.route.snapshot.data.myCourses;
  coursesEnrolled = this.route.snapshot.data.coursesEnrolled;
  isLogged = this.userService.isLogged;

  courses$: Observable<any[]>;
  hasCourses = true;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.myCourses) {
      this.courses$ = this.coursesService.loadMyCourses();
      this.coursesService.loadMyCourses().subscribe(courses => {
        if (courses.length === 0) {
          this.hasCourses = false;
        }
      });
    } else if (this.coursesEnrolled) {
      this.courses$ = this.coursesService.loadEnrolledCourses();
      this.coursesService.loadEnrolledCourses().subscribe(courses => {
        if (courses.length === 0) {
          this.hasCourses = false;
        }
      });
    } else {
      this.courses$ = this.coursesService.loadAllCourses();
      this.coursesService.loadAllCourses().subscribe(courses => {
        if (courses.length === 0) {
          this.hasCourses = false;
        }
      });
    }
    setTimeout(() => {
      console.log(this.hasCourses);
    }, 3000);
  }

  deleteCourse(courseId) {
    this.coursesService.deleteCourse(courseId);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/course/my-courses']);
    });
  }
}
