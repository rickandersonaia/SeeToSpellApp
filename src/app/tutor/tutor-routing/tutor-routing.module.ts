import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TutorGuard} from '../../core/route-gaurds/tutor.guard';
import {OwnerGuard} from '../../core/route-gaurds/owner.guard';

import {StudentAddComponent} from '../student-add/student-add.component';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {TutorDashboardComponent} from '../tutor-dashboard/tutor-dashboard.component';
import {TutorAccountComponent} from '../tutor-account/tutor-account.component';
import {StudentDetailComponent} from '../student-detail/student-detail.component';
import {StudentsListComponent} from '../students-list/students-list.component';
import {LearningPathListComponent} from '../learning-path-list/learning-path-list.component';
import {LearningPathEditComponent} from '../learning-path-edit/learning-path-edit.component';
import {LearningPathAddComponent} from '../learning-path-add/learning-path-add.component';
import {LearningStepListComponent} from '../learning-step-list/learning-step-list.component';
import {LearningStepAddComponent} from '../learning-step-add/learning-step-add.component';
import {LearningStepEditComponent} from '../learning-step-edit/learning-step-edit.component';
import {WordsPurchasedListComponent} from '../words-purchased-list/words-purchased-list.component';
import {WordsListComponent} from '../words-list/words-list.component';
import {WordDetailComponent} from '../word-detail/word-detail.component';

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
            path: 'words',
            component: WordsListComponent,
          },
          {
            path: 'words/:wordId',
            component: WordDetailComponent,
          },
          {
            path: ':id/words',
            component: WordsPurchasedListComponent,
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
            path: 'learning-paths/new',
            component: LearningPathAddComponent,
          },
          {
            path: ':id/learning-paths',
            component: LearningPathListComponent,
          },
          {
            path: 'learning-paths/edit/:learningPathId',
            component: LearningPathEditComponent,
          },
          {
            path: ':id/learning-steps',
            component: LearningStepListComponent,
          },
          {
            path: 'learning-steps/new',
            component: LearningStepAddComponent,
          },
          {
            path: 'learning-steps/edit/:learningStepId',
            component: LearningStepEditComponent,
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
