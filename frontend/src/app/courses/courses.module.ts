import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoreModule } from '../core/core.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-items/list-items.component';



@NgModule({
  declarations: [ListComponent, CourseDetailsComponent, ListItemComponent],
  imports: [
    CommonModule,
    CoreModule,
    CoursesRoutingModule,
    RouterModule
  ],
  exports: [
    ListComponent
  ]
})
export class CoursesModule { }
