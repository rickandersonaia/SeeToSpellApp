import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserDataModel, setsPurchasedOptions, allAvatars} from '../../shared/userdatamodel';
import { UserService} from '../../services/user.service';
import {Location} from '@angular/common';

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
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: '',
      isTutor: false,
      isAdmin: false,
      parentId: [{value: '', disabled: true}],
      setsPurchased: [],
    });

    this.newUserForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.newUserForm) { return; }
    const form = this.newUserForm;

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
    this.userService.addUser(this.newUserForm.value)
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
    this.newUserForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
