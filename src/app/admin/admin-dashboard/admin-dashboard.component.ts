import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../../core/services/current-user.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  currentUser: any;
  isDashboard = true;

  constructor(private currentUserService: CurrentUserService,
              private router: Router) {
    this.conditionalDisplayofDashboardContent();
  }


  ngOnInit() {
    this.currentUser = this.currentUserService.currentUser;
  }

  conditionalDisplayofDashboardContent() {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/admin') {
            this.isDashboard = true;
          } else {
            this.isDashboard = false;
          }
        }
      }
    );
  }

}
