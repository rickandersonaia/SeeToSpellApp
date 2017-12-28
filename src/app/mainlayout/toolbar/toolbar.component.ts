import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'See To Spell';

  constructor(public dialog: MatDialog,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '400px', height: '420px'});
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }


}
