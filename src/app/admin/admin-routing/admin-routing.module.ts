import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UsereditComponent} from '../useredit/useredit.component';
import {NewUserFormComponent} from '../usernewform/newuserform.component';
import {WorddetailComponent} from '../worddetail/worddetail.component';
import {WordnewComponent} from '../wordnew/wordnew.component';
import {WordeditComponent} from '../wordedit/wordedit.component';
import {WordsComponent} from '../words/words.component';

const adminRoutes: Routes = [
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/users/new', component: NewUserFormComponent},
  {path: 'users/edit/:id', component: UsereditComponent},
  {path: 'admin/words', component: WordsComponent},
  {path: 'admin/words/new', component: WordnewComponent},
  {path: 'admin/words/:id', component: WorddetailComponent},
  {path: 'admin/words/edit/:id', component: WordeditComponent},
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
