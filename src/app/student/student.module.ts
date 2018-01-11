import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingComponent } from './student-routing/student-routing.component';
import { SelfEditComponent } from './self-edit/self-edit.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentSidenavComponent } from './student-sidenav/student-sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentRoutingComponent, SelfEditComponent, StudentHomeComponent, StudentSidenavComponent]
})
export class StudentModule { }
