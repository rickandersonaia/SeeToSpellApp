import {Component, ChangeDetectorRef, OnInit, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import {Subscription} from 'rxjs/Subscription';
import {NgClass} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

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
  isLoggedIn: boolean;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private authService: AuthService,
              private router: Router) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.testUserCredentials();
  }

  testUserCredentials() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => {
        if (name) {
          this.username = name;
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }
}
