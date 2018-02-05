import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class InputValidationService {

  mainInput: FormControl;
  confirmInput: FormControl;

  error = String;
  formErrors = {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
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
    'confirmEmail': {
      'required': 'Please confirm your email address',
      'mismatch': 'Confirm email must match the email address entered above'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be at least 8 characters long',
      'maxlength': 'Password must be less than 26 characters long'
    },
    'confirmPassword': {
      'required': 'Please confirm your password',
      'mismatch': 'Confirm password must match password entered above'
    },
    'displayName': {
      'required': 'Display Name is required',
      'minlength': 'Display name must be at least 2 characters long',
      'maxlength': 'Display name must be less than 26 characters long'
    }
  };

  constructor() { }



  passwordMatchValidator(control: FormControl): { [s: string]: boolean } {
    console.log(control);
    return null;
  }

}
