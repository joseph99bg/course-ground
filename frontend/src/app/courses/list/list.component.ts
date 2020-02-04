import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  get courses() {
    return this.coursesService.courses;
  }

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.loadAllCourses();
  }
}
