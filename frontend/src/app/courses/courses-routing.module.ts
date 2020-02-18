import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AuthGuard } from '../auth.guard';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: 'course',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        },
        component: AddComponent
      },
      {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        },
        component: EditComponent
      },
      {
        path: 'my-courses',
        canActivate: [AuthGuard],
        data: {
          myCourses: true,
          isLogged: true
        },
        component: ListComponent
      },
      {
        path: 'courses-enrolled',
        canActivate: [AuthGuard],
        data: {
          coursesEnrolled: true,
          isLogged: true
        },
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
