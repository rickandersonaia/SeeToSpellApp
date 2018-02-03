import {Component, ChangeDetectorRef, OnInit, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../../mainlayout/login/login.component';

import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../core/services/auth.service';
import {CurrentUserService} from '../../../core/services/current-user.service';
import {Router} from '@angular/router';

import {UserService} from '../../../core/services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  subscription: Subscription;
  currentUser: any;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public dialog: MatDialog,
              private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private currentUserService: CurrentUserService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.currentUser = this.currentUserService.getCurrentUser();
    this.currentUserService.currentUserSrc
      .subscribe(currentUser => {
        this.currentUser = currentUser;
      });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '420px'});
  }

  logOut() {
    this.currentUser = undefined;
    this.currentUserService.clearCurrentUser();
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }
}
