import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './shared/material.module';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WordService } from './services/word.service';
import { baseURL, imageURL, audioURL} from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';

import { AppComponent } from './app.component';
import { WordsComponent } from './admin/words/words.component';
import { HomeComponent } from './enduser/home/home.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { SetsComponent } from './enduser/sets/sets.component';
import {routes} from './app-routing/routes';
import { HeaderComponent } from './mainlayout/toolbar/toolbar.component';
import { WorddetailComponent } from './admin/worddetail/worddetail.component';
import { LoginComponent } from './mainlayout/login/login.component';
import { UserFormComponent } from './admin/userform/userform.component';
import { WordformComponent } from './admin/wordform/wordform.component';
import { WordeditComponent } from './admin/wordedit/wordedit.component';
import { WordnewComponent } from './admin/wordnew/wordnew.component';
import { SidenavComponent } from './mainlayout/sidenav/sidenav.component';
import { MaincontentComponent } from './mainlayout/maincontent/maincontent.component';
import { WordcardComponent } from './content-components/wordcard/wordcard.component';



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
    UserFormComponent,
    WordformComponent,
    WordeditComponent,
    WordnewComponent,
    SidenavComponent,
    MaincontentComponent,
    WordcardComponent,
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
    MaterialModule
  ],
  providers: [
    WordService,
    MatDialogModule,
    { provide: 'BaseURL', useValue: baseURL },
    { provide: 'ImageURL', useValue: imageURL },
    { provide: 'AudioURL', useValue: audioURL },
    ProcessHTTPMsgService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
