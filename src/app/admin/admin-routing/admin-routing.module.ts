import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UsereditComponent} from '../useredit/useredit.component';
import {NewUserFormComponent} from '../usernewform/newuserform.component';

const adminRoutes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/new', component: NewUserFormComponent},
  {path: 'users/edit/:id', component: UsereditComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
