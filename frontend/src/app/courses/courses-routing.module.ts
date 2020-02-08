import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
  {
    path: 'course',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: CourseDetailsComponent
      }
    ]
  }
];

export const CoursesRoutingModule = RouterModule.forChild(routes);
