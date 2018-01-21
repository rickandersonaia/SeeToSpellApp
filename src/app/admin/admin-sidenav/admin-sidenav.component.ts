import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {

  adminLinks: object;
  @Input() currentUser: any;

  constructor() { }

  ngOnInit() {
    this.adminLinks = [
      {label: 'Account', link: '/admin/users/edit/' + this.currentUser._id},
      {label: 'View & edit Cards', link: '/admin/words'},
      {label: 'View & edit Users', link: '/admin/users'}
    ];
  }

}
