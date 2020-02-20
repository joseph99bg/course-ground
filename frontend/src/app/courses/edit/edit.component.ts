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
  imageUrl: string;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.coursesService.loadSingleCourse(this.courseId).subscribe(
      res => {
        this.course = res;
        this.imageUrl = res.image;
      }
    );
  }

  editCourseHandler(formData) {
    const image = this.imageUrl;
    this.coursesService.editCourse({...formData, image}, this.courseId);
    this.router.navigate(['/course/my-courses']);
  }

  imageUploadHandler(event) {
    this.imageUrl = event.cdnUrl;
  }

}
