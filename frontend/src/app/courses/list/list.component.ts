import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
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
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.coursesService.loadAllCourses();
  }
}
