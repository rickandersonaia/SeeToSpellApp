import { Routes } from '@angular/router';

import { WordsComponent } from '../words/words.component';
import { HomeComponent } from '../home/home.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { SetsComponent } from '../sets/sets.component';
import { WorddetailComponent } from '../worddetail/worddetail.component';
import {UserFormComponent} from '../userform/userform.component';
import {WordnewComponent} from '../wordnew/wordnew.component';
import {WordeditComponent} from '../wordedit/wordedit.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'words', component: WordsComponent},
  {path: 'words/new', component: WordnewComponent},
  {path: 'words/:id', component: WorddetailComponent},
  {path: 'words/edit/:id', component: WordeditComponent},
  {path: 'users/new', component: UserFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];
