import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatLineModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
