import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../tutor/home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule {}
