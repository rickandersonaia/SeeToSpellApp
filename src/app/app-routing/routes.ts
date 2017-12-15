import { Routes } from '@angular/router';

import { WordsComponent } from '../words/words.component';
import { HomeComponent } from '../home/home.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { SetsComponent } from '../sets/sets.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'words', component: WordsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ];