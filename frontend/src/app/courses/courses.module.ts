import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ListComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ListComponent
  ]
})
export class CoursesModule { }
