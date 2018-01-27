import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../core/services/current-user.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

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
          if (event.url === '/tutor') {
            this.isDashboard = true;
          } else {
            this.isDashboard = false;
          }
        }
      }
    );
  }

}
