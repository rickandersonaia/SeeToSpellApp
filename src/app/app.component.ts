import {Component, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoggedIn: Boolean;

  constructor(private authService: AuthService) {
    console.log('random text');
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
