import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserDataModel, allAvatars} from '../../core/shared/userdatamodel';
import { UserService} from '../../core/services/user.service';
import {Location} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: UserDataModel;
  avatars = allAvatars;
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

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private location: Location,
              private dialogRef: MatDialogRef<RegisterComponent>,
              private authService: AuthService,
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
      avatar: '',
      isTutor: true
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
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
    this.userService.addUser(this.registerForm.value)
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
    this.registerForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}