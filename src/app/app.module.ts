import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatLineModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WordService } from './services/word.service';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SetsComponent } from './sets/sets.component';
import {routes} from './app-routing/routes';
import { HeaderComponent } from './header/header.component';
import { WorddetailComponent } from './worddetail/worddetail.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './userform/userform.component';




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
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [
    WordService,
    MatDialogModule
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
