import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MaterialModule} from './core/shared/material.module';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';
import 'hammerjs';

import {baseURL, imageURL, audioURL, avatarURL} from './core/shared/baseurl';

import {AdminModule} from './admin/admin.module';
import {TutorModule} from './tutor/tutor.module';
import {StudentModule} from './student/student.module';
import {SharedModule} from './core/shared/shared.module';
import {AppRoutingModule} from './core/app-routing/app-routing.module';
import {AdminRoutingModule} from './admin/admin-routing/admin-routing.module';
import {TutorRoutingModule} from './tutor/tutor-routing/tutor-routing.module';

import {WordService} from './core/services/word.service';
import {UserService} from './core/services/user.service';
import {ProcessHTTPMsgService} from './core/services/process-httpmsg.service';
import {AuthService} from './core/services/auth.service';
import {AuthInterceptor, UnauthorizedInterceptor} from './core/services/auth.interceptor';
import {MessageService} from './core/services/message.service';
import {CurrentUserService} from './core/services/current-user.service';
import {StudentService} from './core/services/student.service';
import {LearningPathService} from './core/services/learning-path.service';
import {LearningStepService} from './core/services/learning-step.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './tutor/home/home.component';
import {LoginComponent} from './shared-views/mainlayout/login/login.component';
import {RegisterComponent} from './shared-views/mainlayout/register/register.component';
import { NotFoundComponent } from './shared-views/not-found/not-found.component';

import {AdminGuard} from './core/route-gaurds/admin.guard';
import {TutorGuard} from './core/route-gaurds/tutor.guard';
import {StudentGuard} from './core/route-gaurds/student.guard';
import {OwnerGuard} from './core/route-gaurds/owner.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminModule,
    TutorModule,
    StudentModule,
    SharedModule,
    TutorRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
  ],
  providers: [
    WordService,
    UserService,
    StudentService,
    MatDialogModule,
    AuthService,
    MessageService,
    CurrentUserService,
    LearningPathService,
    LearningStepService,
    AdminGuard,
    TutorGuard,
    StudentGuard,
    OwnerGuard,
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
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
