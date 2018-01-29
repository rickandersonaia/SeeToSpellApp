import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {

  adminLinks: object;
  @Input() currentUser: any;

  constructor() {
  }

  ngOnInit() {
    this.adminLinks = [
      {
        label: 'Account',
        link: '/admin/users/edit/' + this.currentUser._id,
        icon: 'account_circle'
      },
      {
        label: 'Dashboard',
        link: '/admin',
        icon: 'dashboard'
      },
      {
        label: 'View & edit Cards',
        link: '/admin/words',
        icon: 'photo_library'
      },
      {
        label: 'View & edit Users',
        link: '/admin/users',
        icon: 'people'
      }
    ];
  }

}
