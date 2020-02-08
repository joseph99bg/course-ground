import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: ICourse;
  error = false;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.coursesService.loadSingleCourse(id).subscribe(
      res => this.course = res,
      err => this.error = err
    );
  }

}
