import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/course';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: ICourse;
  error = false;
  courseEnrolled = false;
  myCourse = false;
  isLogged = this.userService.isLogged;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.coursesService.loadSingleCourse(id).subscribe(
      res => {
        this.course = res;
        if (localStorage.getItem('current-user-id')) {
          const userId = localStorage.getItem('current-user-id');
          if (res.users.find(x => x === userId)) {
            this.courseEnrolled = true;
          }
          if (res.author === userId) {
            this.myCourse = true;
          }
        }
      },
      err => this.error = err
    );
  }

  enrollCourse(courseId) {
    this.coursesService.enrollCourse(courseId);
    this.router.navigate(['/course/courses-enrolled']);
  }

}
