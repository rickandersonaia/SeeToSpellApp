import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {StudentDataModel, studentAvatars} from '../../core/shared/studentdatamodel';
import { UserService} from '../../core/services/user.service';
import {StudentService} from '../../core/services/student.service';
import {Location} from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  newUserForm: FormGroup;
  user: StudentDataModel;
  avatars = studentAvatars;
  formErrors = {
    displayName: ''
  };

  validationMessages = {
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

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newUserForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: 'generic.jpeg',
      parentId: [{value: '', disabled: true}]
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
        this.router.navigateByUrl('/users');
      });
    this.newUserForm.reset();
  }

  goBack(): void {
    this.location.back();
  }


}
