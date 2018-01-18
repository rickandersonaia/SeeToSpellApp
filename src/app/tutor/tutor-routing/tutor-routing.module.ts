import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {StudentsListModule} from '../../student/students-list/students-list.module';
import {StudentAddComponent} from '../student-add/student-add.component';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {SetsComponent} from '../sets/sets.component';
import {SetsAddComponent} from '../sets-add/sets-add.component';
import {SetsEditComponent} from '../sets-edit/sets-edit.component';
import {TutorDashboardComponent} from '../tutor-dashboard/tutor-dashboard.component';
import {TutorAccountComponent} from '../tutor-account/tutor-account.component';
import {TutorGuard} from '../../core/route-gaurds/tutor.guard';
import {OwnerGuard} from '../../core/route-gaurds/owner.guard';

const tutorRoutes: Routes = [
  {
    path: 'tutor',
    component: TutorDashboardComponent,
    canActivate: [TutorGuard],
    children: [
      {
        path: '',
        canActivateChild: [TutorGuard, OwnerGuard],
        children: [
          {
            path: 'edit/:id',
            component: TutorAccountComponent,
          },
          {
            path: ':id/students',
            component: StudentsListModule,
          },
          {
            path: ':id/students/new',
            component: StudentAddComponent,
          },
          {
            path: ':id/students/edit/:studentid',
            component: StudentEditComponent,
          },
          {
            path: ':id/sets',
            component: SetsComponent,
          },
          {
            path: ':id/sets/new',
            component: SetsAddComponent,
          },
          {
            path: ':id/sets/edit',
            component: SetsEditComponent,
          },
        ]
      }
    ],
  }
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tutorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TutorRoutingModule { }
