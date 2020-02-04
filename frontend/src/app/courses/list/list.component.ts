import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get courses() {
    return this.coursesService.courses;
  }

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursesService.loadAllCourses();
  }

  selectCourseHandler(courseId: string) {
    this.router.navigate(['/course', courseId]);
  }
}
