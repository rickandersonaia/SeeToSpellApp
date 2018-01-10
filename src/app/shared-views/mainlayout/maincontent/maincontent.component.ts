import {Component, ChangeDetectorRef, OnInit, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../../mainlayout/login/login.component';

import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit, OnDestroy {

  mode: string;
  mobileQuery: MediaQueryList;
  username: string = undefined;
  subscription: Subscription;
  currentUser: object;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public dialog: MatDialog,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => {
        this.username = name;
        this.userService.getUserByUsername(this.username)
          .subscribe(user => {
            this.currentUser = user[0];
          });
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '420px'});
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }
}
