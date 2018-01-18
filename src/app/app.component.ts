import {Component, OnInit, OnDestroy} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './core/services/auth.service';
import {CurrentUserService} from './core/services/current-user.service';
import {MessageService} from './core/services/message.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isLoggedIn: Boolean;
  username: string = undefined;
  subscription: Subscription;
  msgSubscription: Subscription;
  message: any;
  action: any;

  constructor(private authService: AuthService,
              private messageService: MessageService,
              public snackBar: MatSnackBar,
              private currentUserService: CurrentUserService) {

    this.msgSubscription = this.messageService.getMessage()
      .subscribe(message => {
        this.message = message;
        this.snackBar.open(message.text, this.action, {
          duration: 3000,
        });
      });
  }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => {
        this.username = name;
        console.log(this.username);
      });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.msgSubscription.unsubscribe();
  }
}
