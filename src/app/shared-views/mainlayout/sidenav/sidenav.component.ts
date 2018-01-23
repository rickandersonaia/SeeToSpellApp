import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  adminLinks: object;
  @Input() currentUser: any;

  constructor() { }

  ngOnInit() {
    this.adminLinks = [
      {label: 'Account', link: '/tutor/edit/' + this.currentUser._id},
      {label: 'Dashboard', link: '/tutor'},
      {label: 'All of your students', link: '/tutor/' + this.currentUser._id + '/students/'},
      {label: 'Add a new student', link: '/tutor/students/new/'},
      {label: 'Add a new Learnin Path', link: '/tutor/learning-paths/new/'},
      {label: 'All of your Learning Paths', link: '/tutor/' + this.currentUser._id + '/learning-paths/'},
    ];
  }


}
