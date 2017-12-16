import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDef} from '../shared/userdef';

@Component({
  selector: 'app-users',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  users: UserDef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: '',
      email: '',
      password: '',
      displayname: '',
      avatar: '',
      istutor: false,
      parentid: '',
      setspurchased: '',
    });
  }

  onSubmit() {
    this.users = this.userForm.value;
    console.log(this.users);
    this.userForm.reset();
  }

}