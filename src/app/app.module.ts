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

import 'hammerjs';
import {AdminModule} from './admin/admin.module';
import {TutorModule} from './tutor/tutor.module';
import {StudentModule} from './student/student.module';
import {SharedModule} from './core/shared/shared.module';
import {AppRoutingModule} from './core/app-routing/app-routing.module';
import {WordService} from './core/services/word.service';
import {UserService} from './core/services/user.service';
import {baseURL, imageURL, audioURL, avatarURL} from './core/shared/baseurl';
import {ProcessHTTPMsgService} from './core/services/process-httpmsg.service';
import {AuthService} from './core/services/auth.service';
import {AuthInterceptor, UnauthorizedInterceptor} from './core/services/auth.interceptor';
import {MessageService} from './core/services/message.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './tutor/home/home.component';
import {LoginComponent} from './shared-views/mainlayout/login/login.component';
import {RegisterComponent} from './shared-views/mainlayout/register/register.component';
import {AdminRoutingModule} from './admin/admin-routing/admin-routing.module';
import {TutorRoutingModule} from './tutor/tutor-routing/tutor-routing.module';
import { NotFoundComponent } from './shared-views/not-found/not-found.component';

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
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
