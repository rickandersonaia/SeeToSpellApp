import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserDataModel, allAvatars} from '../../../core/shared/userdatamodel';
import {UserService} from '../../../core/services/user.service';
import {Location} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../../core/services/auth.service';
import {MessageService} from '../../../core/services/message.service';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: UserDataModel;
  avatars = allAvatars;
  error = String;
  formErrors = {
    username: '',
    email: '',
    password: '',
    displayName: ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required',
      'minlength': 'Username must be at least 6 characters long',
      'maxlength': 'Username must be less than 26 characters long'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email must be valid email address'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be at least 8 characters long',
      'maxlength': 'Password must be less than 26 characters long'
    },
    'displayName': {
      'required': 'Display Name is required',
      'minlength': 'Display name must be at least 2 characters long',
      'maxlength': 'Display name must be less than 26 characters long'
    }
  };

  messages = [
    {'short': 'UserExistsError', 'long': 'Username already exists - please try again'},
    {'short': 'E11000 duplicate key error', 'long': 'That email address is already in use - please choose another'}
  ];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private location: Location,
              private dialogRef: MatDialogRef<RegisterComponent>,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: 'generic.jpeg',
      isTutor: true
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.userService.registerUser(this.registerForm.value)
      .subscribe(user => {
          console.log(user);
          this.user = user;
          this.closeDialog();
          this.messageService.sendMessage('You have successfully registered, please login');
          this.router.navigateByUrl('/home');
        },
        error => {
          let msg = 'error';
          this.error = error;
          console.log(error);
          msg = this.checkForKnownError(error);
          this.messageService.sendMessage(msg);
        });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  goBack(): void {
    this.location.back();
  }

  checkForKnownError(error) {
    let msg = 'Something went wrong with your registration';

    this.messages.forEach((message, key) => {
        if (error.search(message.short) > 0) {
          msg  = message.long;
        }
      }
    );
    return msg;
  }

}
