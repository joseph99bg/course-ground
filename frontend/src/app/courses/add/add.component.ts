import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCourseHandler(formData) {
    this.coursesService.addCourse(formData);
    this.router.navigate(['/course/my-courses']);
  }

}
