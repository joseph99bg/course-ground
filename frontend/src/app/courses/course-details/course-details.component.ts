import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  get course() {
    return this.coursesService.course;
  }

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.coursesService.loadSingleCourse(id);
  }

}
