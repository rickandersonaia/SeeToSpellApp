import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../core/services/auth.service';
import {CurrentUserService} from '../../core/services/current-user.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  subscription: Subscription;
  currentUser: object;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.currentUser;
  }

}
