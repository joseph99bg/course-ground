import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoreModule } from '../core/core.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [ListComponent, CourseDetailsComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    CoreModule,
    CoursesRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    ListComponent
  ]
})
export class CoursesModule { }
