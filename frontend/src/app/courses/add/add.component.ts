import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  imageUrl: string;

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {  }

  ngOnInit() {
  }

  addCourseHandler(formData) {
    const image = this.imageUrl;
    this.coursesService.addCourse({...formData, image});
    this.router.navigate(['/course/my-courses']);
  }

  imageUploadHandler(event) {
    this.imageUrl = event.cdnUrl;
  }

}
