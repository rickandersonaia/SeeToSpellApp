import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminRoutingModule} from './admin-routing/admin-routing.module';
import {WordService} from '../core/services/word.service';
import {UserService} from '../core/services/user.service';
import {NewUserFormComponent} from './usernewform/newuserform.component';
import {UsereditComponent} from './useredit/useredit.component';
import {UsersComponent} from './users/users.component';
import {UsercardComponent} from '../shared-views/content-components/usercard/usercard.component';
import {MaterialModule} from '../core/shared/material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  declarations: [
    NewUserFormComponent,
    UsereditComponent,
    UsersComponent,
    UsercardComponent,
  ],
  providers: [
    WordService,
    UserService
  ]
})
export class AdminModule { }
