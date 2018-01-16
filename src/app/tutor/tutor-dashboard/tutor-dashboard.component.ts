import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  subscription: Subscription;
  currentUser: object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.getCurrentUser()
      .subscribe(currentUser => {
        console.log(currentUser)
        this.currentUser = currentUser;
      });
  }

}
