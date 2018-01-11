import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfEditComponent } from './self-edit/self-edit.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentSidenavComponent } from './student-sidenav/student-sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SelfEditComponent, StudentHomeComponent, StudentSidenavComponent]
})
export class StudentModule { }
