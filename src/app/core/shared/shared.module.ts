import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaincontentComponent} from '../../shared-views/mainlayout/maincontent/maincontent.component';
import {SidenavComponent} from '../../shared-views/mainlayout/sidenav/sidenav.component';
import {UsercardComponent} from '../../shared-views/content-components/usercard/usercard.component';
import {WordcardComponent} from '../../shared-views/content-components/wordcard/wordcard.component';
import {AdminSidenavComponent} from '../../admin/admin-sidenav/admin-sidenav.component';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {baseURL, avatarURL, imageURL, audioURL} from './baseurl';
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MessageService} from '../services/message.service';
import {AuthInterceptor, UnauthorizedInterceptor} from '../services/auth.interceptor';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {WordService} from '../services/word.service';
import {EntranceComponent} from '../../shared-views/entrance/entrance.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import {AdminRoutingModule} from '../../admin/admin-routing/admin-routing.module';
import {TutorRoutingModule} from '../../tutor/tutor-routing/tutor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  declarations: [
    SidenavComponent,
    AdminSidenavComponent,
    MaincontentComponent,
    EntranceComponent,
    UsercardComponent,
    WordcardComponent,
  ],
  exports: [
    SidenavComponent,
    AdminSidenavComponent,
    MaincontentComponent,
    EntranceComponent,
    UsercardComponent,
    WordcardComponent,
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
})
export class SharedModule {
}
