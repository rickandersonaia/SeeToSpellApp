import { Routes } from '@angular/router';

import { WordsComponent } from '../admin/words/words.component';
import { HomeComponent } from '../enduser/home/home.component';
import { AccountsComponent } from '../admin/accounts/accounts.component';
import { SetsComponent } from '../enduser/sets/sets.component';
import { WorddetailComponent } from '../admin/worddetail/worddetail.component';
import {UserFormComponent} from '../admin/userform/userform.component';
import {WordnewComponent} from '../admin/wordnew/wordnew.component';
import {WordeditComponent} from '../admin/wordedit/wordedit.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'words', component: WordsComponent},
  {path: 'words/new', component: WordnewComponent},
  {path: 'words/:id', component: WorddetailComponent},
  {path: 'words/edit/:id', component: WordeditComponent},
  {path: 'users/new', component: UserFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];
