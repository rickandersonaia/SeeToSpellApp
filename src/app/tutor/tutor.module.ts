import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingComponent } from './tutor-routing/tutor-routing.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { SetsEditComponent } from './sets-edit/sets-edit.component';
import { SetsAddComponent } from './sets-add/sets-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TutorRoutingComponent, StudentAddComponent, StudentEditComponent, SetsEditComponent, SetsAddComponent]
})
export class TutorModule { }
