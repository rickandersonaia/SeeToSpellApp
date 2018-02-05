import {Component, OnInit, Inject, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserDataModel, setsPurchasedOptions, allAvatars} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {MessageService} from '../../core/services/message.service';
import {StudentService} from '../../core/services/student.service';
import {LearningPathService} from '../../core/services/learning-path.service';

@Component({
  selector: 'app-admin-useredit',
  templateUrl: './admin-useredit.component.html',
  styleUrls: ['./admin-useredit.component.scss']
})

export class AdminUserEditComponent implements OnInit {

  editUserForm: FormGroup;
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
              private lps: LearningPathService,
              private location: Location,
              private route: ActivatedRoute,
              private deleteroute: Router,
              private messageService: MessageService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {
    this.createForm();
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.getFormData(id);
  }

  getFormData(id) {
    this.userService.getUserById(id)
      .subscribe(user => {
        this.user = user;
        this.editUserForm.patchValue(user);
      });
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.editUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: '',
      confirmPassword: ['', [this.passwordMatchValidator.bind(this)]],
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: '',
      isTutor: false,
      isAdmin: false,
      setsPurchased: [],
    });

    this.editUserForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  passwordMatchValidator(control: FormControl): { [s: string]: boolean } {
    if (this.editUserForm) {
      const password = this.editUserForm.get('password').value;
      const confirm = control.value;
      if (password !== confirm) {
        return {'mismatch': true};
      }
    }
    return null;
  }

  onValueChanged(data?: any) {
    if (!this.editUserForm) {
      return;
    }
    const form = this.editUserForm;

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
    this.userService.editUser(this.user._id, this.editUserForm.value)
      .subscribe(user => {
        console.log(user);
        this.getFormData(this.user._id);
      });
  }


  onDelete() {
    this.userService.deleteUser(this.user._id)
      .subscribe(deletedUser => {
          this.deleteroute.navigateByUrl('/admin/users');
          this.messageService.sendMessage('The user is deleted.');
          this.deleteStudents(this.user._id);
          this.deleteLearningPaths(this.user._id);
        },
        error => this.messageService.sendMessage('There was a problem deleting this user'));
  }

  deleteStudents(userId) {
    this.userService.deleteTutorStudents(userId)
      .subscribe(resp => {
        this.messageService.sendMessage('The user\'s students are deleted.');
      },
        error => this.messageService.sendMessage('There was a problem deleting this user\'s students'));
  }

  deleteLearningPaths(userId) {
    this.userService.deleteTutorLearningPaths(userId)
      .subscribe(resp => {
          this.messageService.sendMessage('The user\'s learning paths are deleted.');
        },
        error => this.messageService.sendMessage('There was a problem deleting this user\'s learning paths'));
  }
}
