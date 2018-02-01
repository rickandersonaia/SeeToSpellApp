import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {TutorRoutingModule} from './tutor-routing/tutor-routing.module';
import {SharedModule} from '../core/shared/shared.module';
import {AdminRoutingModule} from '../admin/admin-routing/admin-routing.module';
import {MaterialModule} from '../core/shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { TutorAccountComponent } from './tutor-account/tutor-account.component';
import { PurchaseSummaryComponent } from './purchase-summary/purchase-summary.component';
import {TutorUsereditComponent} from './tutor-useredit/tutor-useredit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { LearningPathAddComponent } from './learning-path-add/learning-path-add.component';
import { LearningPathEditComponent } from './learning-path-edit/learning-path-edit.component';
import { LearningPathListComponent } from './learning-path-list/learning-path-list.component';
import { WordsListComponent } from './words-list/words-list.component';
import { WordsPurchasedListComponent } from './words-purchased-list/words-purchased-list.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { TutorDashboardStatsComponent } from './tutor-dashboard-stats/tutor-dashboard-stats.component';
import { FirstStepsComponent } from './first-steps/first-steps.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    DragulaModule,
  ],
  declarations: [
    StudentAddComponent,
    StudentEditComponent,
    TutorDashboardComponent,
    TutorAccountComponent,
    TutorUsereditComponent,
    PurchaseSummaryComponent,
    StudentDetailComponent,
    StudentsListComponent,
    LearningPathAddComponent,
    LearningPathEditComponent,
    LearningPathListComponent,
    WordsListComponent,
    WordsPurchasedListComponent,
    WordDetailComponent,
    TutorDashboardStatsComponent,
    FirstStepsComponent,
    DocumentationComponent]
})
export class TutorModule {
}
