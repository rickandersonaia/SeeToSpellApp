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

const tutorRoutes: Routes = [
  {
    path: 'tutor',
    component: TutorDashboardComponent,
    children: [
      {
        path: 'edit/:id',
        component: TutorAccountComponent,
      },
      {
        path: 'students',
        component: StudentsListModule,
      },
      {
        path: 'students/new',
        component: StudentAddComponent,
      },
      {
        path: 'students/edit/:id',
        component: StudentEditComponent,
      },
      {
        path: 'sets',
        component: SetsComponent,
      },
      {
        path: 'sets/new',
        component: SetsAddComponent,
      },
      {
        path: 'sets/edit/:id',
        component: SetsEditComponent,
      },
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
