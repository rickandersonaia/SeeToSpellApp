import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TutorGuard} from '../../core/route-gaurds/tutor.guard';
import {OwnerGuard} from '../../core/route-gaurds/owner.guard';

import {StudentAddComponent} from '../student-add/student-add.component';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {SetsComponent} from '../sets/sets.component';
import {SetsAddComponent} from '../sets-add/sets-add.component';
import {SetsEditComponent} from '../sets-edit/sets-edit.component';
import {TutorDashboardComponent} from '../tutor-dashboard/tutor-dashboard.component';
import {TutorAccountComponent} from '../tutor-account/tutor-account.component';
import {StudentDetailComponent} from '../student-detail/student-detail.component';
import {SetDetailComponent} from '../set-detail/set-detail.component';
import {StudentsListComponent} from '../students-list/students-list.component';

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
            component: StudentsListComponent,
          },
          {
            path: 'students/new',
            component: StudentAddComponent,
          },
          {
            path: 'students/:studentId',
            component: StudentDetailComponent,
          },
          {
            path: 'students/edit/:studentId',
            component: StudentEditComponent,
          },
          {
            path: ':id/sets',
            component: SetsComponent,
          },
          {
            path: 'sets/new',
            component: SetsAddComponent,
          },
          {
            path: 'sets/:id',
            component: SetDetailComponent,
          },
          {
            path: ':id/sets/edit',
            component: SetsEditComponent,
          },
        ]
      }
    ],
  }
];

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
export class TutorRoutingModule {
}
