import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../core/shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';

import {AdminRoutingModule} from './admin-routing/admin-routing.module';
import {SharedModule} from '../core/shared/shared.module';

import {WordService} from '../core/services/word.service';
import {UserService} from '../core/services/user.service';

import {NewUserFormComponent} from './usernewform/newuserform.component';
import {AdminUserEditComponent} from './admin-useredit/admin-useredit.component';
import {UsersComponent} from './users/users.component';
import {WorddetailComponent} from './worddetail/worddetail.component';
import {WordsComponent} from './words/words.component';
import {WordeditComponent} from './wordedit/wordedit.component';
import {WordnewComponent} from './wordnew/wordnew.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ProcessHTTPMsgService} from '../core/services/process-httpmsg.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MessageService} from '../core/services/message.service';
import {audioURL, avatarURL, baseURL, imageURL} from '../core/shared/baseurl';
import {AuthInterceptor, UnauthorizedInterceptor} from '../core/services/auth.interceptor';
import {AuthService} from '../core/services/auth.service';
import {TutorRoutingModule} from '../tutor/tutor-routing/tutor-routing.module';
import {AccountsComponent} from './accounts/accounts.component';
import { AdminDashboardStatsComponent } from './admin-dashboard-stats/admin-dashboard-stats.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TutorRoutingModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  declarations: [
    NewUserFormComponent,
    AdminUserEditComponent,
    UsersComponent,
    WorddetailComponent,
    WordsComponent,
    WordeditComponent,
    WordnewComponent,
    AdminDashboardComponent,
    AccountsComponent,
    AdminDashboardStatsComponent,
  ],
  exports: [],
  providers: [
    WordService,
    UserService,
    MatDialogModule,
    AuthService,
    MessageService,
    {provide: 'BaseURL', useValue: baseURL},
    {provide: 'ImageURL', useValue: imageURL},
    {provide: 'AudioURL', useValue: audioURL},
    {provide: 'AvatarURL', useValue: avatarURL},
    ProcessHTTPMsgService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ]
})
export class AdminModule {
}
