import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myCourses = this.route.snapshot.data.myCourses;
  isLogged = this.userService.isLogged;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  get courses() {
    return this.coursesService.courses;
  }

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.myCourses) {
      this.coursesService.loadMyCourses();
    } else {
      this.coursesService.loadAllCourses();
    }
  }

  deleteCourse(courseId) {
    this.coursesService.deleteCourse(courseId);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/course/my-courses']);
    });
  }
}
