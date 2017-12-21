import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserDataModel} from '../../shared/userdatamodel';

@Component({
  selector: 'app-users',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  users: UserDataModel;
  formErrors = {
    username: '',
    email: '',
    password: '',
    displayname: ''
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
    'displayname': {
      'required': 'Display Name is required',
      'minlength': 'Display name must be at least 2 characters long',
      'maxlength': 'Display name must be less than 26 characters long'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      displayname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: '',
      istutor: false,
      parentid: [{value: '', disabled: true}],
      setspurchased: '',
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;

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
    this.users = this.userForm.value;
    console.log(this.users);
    this.userForm.reset();
  }

}
