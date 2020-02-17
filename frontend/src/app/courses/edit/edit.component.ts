import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  course: ICourse;
  courseId = this.route.snapshot.params.id;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursesService.loadSingleCourse(this.courseId).subscribe(
      res => this.course = res
    );
  }

  editCourseHandler(formData) {
    this.coursesService.editCourse(formData, this.courseId);
    this.router.navigate(['/course/my-courses']);
  }

}
