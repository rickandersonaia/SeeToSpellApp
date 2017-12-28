import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../services/auth.service';
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
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe(res => {
          if (res.success) {
            this.dialogRef.close(res.success);
          } else {
            console.log(res);
          }
        },
        error => {
          console.log(error);
          this.errMess = error;
        });
  }

}
