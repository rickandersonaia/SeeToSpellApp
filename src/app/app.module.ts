import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser';
import { FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './shared/material.module';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WordService } from './services/word.service';
import { UserService} from './services/user.service';
import { baseURL, imageURL, audioURL, avatarURL} from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
import {AuthService} from './services/auth.service';
import {AuthInterceptor, UnauthorizedInterceptor} from './services/auth.interceptor';

import { AppComponent } from './app.component';
import { WordsComponent } from './admin/words/words.component';
import { HomeComponent } from './enduser/home/home.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { SetsComponent } from './enduser/sets/sets.component';
import {routes} from './app-routing/routes';
import { HeaderComponent } from './mainlayout/toolbar/toolbar.component';
import { WorddetailComponent } from './admin/worddetail/worddetail.component';
import { LoginComponent } from './mainlayout/login/login.component';
import { NewUserFormComponent } from './admin/usernewform/newuserform.component';
import { WordeditComponent } from './admin/wordedit/wordedit.component';
import { WordnewComponent } from './admin/wordnew/wordnew.component';
import { SidenavComponent } from './mainlayout/sidenav/sidenav.component';
import { MaincontentComponent } from './mainlayout/maincontent/maincontent.component';
import { WordcardComponent } from './content-components/wordcard/wordcard.component';
import { UsereditComponent } from './admin/useredit/useredit.component';
import { UsersComponent } from './admin/users/users.component';
import { UsercardComponent } from './content-components/usercard/usercard.component';



@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HomeComponent,
    AccountsComponent,
    SetsComponent,
    HeaderComponent,
    WorddetailComponent,
    LoginComponent,
    NewUserFormComponent,
    WordeditComponent,
    WordnewComponent,
    SidenavComponent,
    MaincontentComponent,
    WordcardComponent,
    UsereditComponent,
    UsersComponent,
    UsercardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    WordService,
    UserService,
    MatDialogModule,
    AuthService,
    { provide: 'BaseURL', useValue: baseURL },
    { provide: 'ImageURL', useValue: imageURL },
    { provide: 'AudioURL', useValue: audioURL },
    { provide: 'AvatarURL', useValue: avatarURL },
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
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
