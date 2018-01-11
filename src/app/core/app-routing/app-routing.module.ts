import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../tutor/home/home.component';
import {NotFoundComponent} from '../../shared-views/not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    // RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
