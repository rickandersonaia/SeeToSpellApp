import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {WorddetailComponent} from '../../admin/worddetail/worddetail.component';
import {WordnewComponent} from '../../admin/wordnew/wordnew.component';
import {WordeditComponent} from '../../admin/wordedit/wordedit.component';
import {HomeComponent} from '../../tutor/home/home.component';
import {WordsComponent} from '../../admin/words/words.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule {}
