import {Component, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoggedIn: Boolean;
  username: string = undefined;
  subscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => {
        this.username = name;
        console.log(this.username);
      });
  }
}
