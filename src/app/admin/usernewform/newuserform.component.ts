import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {UserDataModel, setsPurchasedOptions, allAvatars} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newuserform',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.scss']
})
export class NewUserFormComponent implements OnInit {

  newUserForm: FormGroup;
  user: UserDataModel;
  options = setsPurchasedOptions;
  avatars = allAvatars;
  formErrors = {
    username: '',
    email: '',
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

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private location: Location,
              private router: Router,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.newUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: '',
      isTutor: false,
      isAdmin: false,
      setsPurchased: [],
    })
    ;

    this.newUserForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  passwordMatchValidator(control: FormControl): { [s: string]: boolean } {
    if (this.newUserForm) {
      const password = this.newUserForm.get('password').value;
      const confirm = control.value;
      if (password !== confirm) {
        return {'mismatch': true};
      }
    }
    return null;
  }

  onValueChanged(data?: any) {
    if (!this.newUserForm) {
      return;
    }
    const form = this.newUserForm;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    console.log(this.newUserForm.value);
    this.userService.addUser(this.newUserForm.value)
      .subscribe(user => {
        this.router.navigateByUrl('/admin/users');
        console.log(user);
        this.user = user;
      });
    this.newUserForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
