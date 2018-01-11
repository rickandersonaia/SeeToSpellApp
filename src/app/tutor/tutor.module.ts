import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {SetsEditComponent} from './sets-edit/sets-edit.component';
import {SetsAddComponent} from './sets-add/sets-add.component';
import {TutorRoutingModule} from './tutor-routing/tutor-routing.module';
import {SharedModule} from '../core/shared/shared.module';
import {AdminRoutingModule} from '../admin/admin-routing/admin-routing.module';
import {MaterialModule} from '../core/shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {SetsComponent} from './sets/sets.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';

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
  ],
  declarations: [
    StudentAddComponent,
    StudentEditComponent,
    SetsComponent,
    SetsEditComponent,
    SetsAddComponent,
    TutorDashboardComponent]
})
export class TutorModule {
}
