import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatLineModule } from '@angular/material';

import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WordService } from './services/word.service';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SetsComponent } from './sets/sets.component';
import {routes} from './app-routing/routes';




@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HomeComponent,
    AccountsComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    AppRoutingModule
  ],
  providers: [
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
