import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../../core/services/auth.service';
import {MessageService} from '../../../core/services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe(res => {
          // res returns success, username, isAdmin
          if (res.success) {
            this.messageService.sendMessage('You are logged in!');
            this.dialogRef.close(res.success);
            if (res.isAdmin === true) { // reroute on admin
              this.router.navigateByUrl('/admin');
            } // otherwise stay at home

          } else {
            this.messageService.sendMessage('There is a problem with your username or password');
          }
        },
        error => {
          this.messageService.sendMessage('There is a problem with your username or password');
        });
  }

}
