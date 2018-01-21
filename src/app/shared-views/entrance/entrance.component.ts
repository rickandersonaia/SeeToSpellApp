import {Component, ChangeDetectorRef, OnInit, OnDestroy, Inject} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../mainlayout/login/login.component';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {RegisterComponent} from '../mainlayout/register/register.component';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit, OnDestroy {

  mode: string;
  mobileQuery: MediaQueryList;
  username: string = undefined;
  subscription: Subscription;
  isLoggedIn: boolean;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public dialog: MatDialog,
              public registerdialog: MatDialog,
              @Inject('ImageURL') public ImageURL) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '420px'});
  }

  openRegisterForm() {
    this.registerdialog.open(RegisterComponent, {width: '400px', height: '500px'});
  }


}
