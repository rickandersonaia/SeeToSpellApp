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
  errMess: string;

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
          if (res.success) {
            this.messageService.sendMessage('You are logged in!');
            this.dialogRef.close(res.success);
            this.router.navigateByUrl('/home');
          } else {
            console.log(res);
            this.messageService.sendMessage('There is a problem with your username or password');
          }
        },
        error => {
          this.messageService.sendMessage('There is a problem with your username or password');
        });
  }

  // sendMessage(): void {
  //   // send message to subscribers via observable subject
  //   this.messageService.sendMessage('You are logged in!');
  // }

}
