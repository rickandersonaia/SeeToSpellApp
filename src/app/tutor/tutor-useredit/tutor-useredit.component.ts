import {Component, OnInit, Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserDataModel, allAvatars} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';


@Component({
  selector: 'app-tutor-useredit',
  templateUrl: './tutor-useredit.component.html',
  styleUrls: ['./tutor-useredit.component.scss']
})
export class TutorUsereditComponent implements OnInit {

  editUserForm: FormGroup;
  public user: UserDataModel;
  avatars = allAvatars;
  public exusername: string;
  public exemail: string;
  public expassword: string;
  public exdisplayname: string;
  public exavatar: string;
  private sets: object;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private location: Location,
              private route: ActivatedRoute,
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
        this.exusername = user.username ? user.username : null;
        this.exemail = user.email ? user.email : null;
        this.expassword = user.password ? user.password : null;
        this.exdisplayname = user.displayName ? user.displayName : null;
        this.exavatar = user.avatar ? user.avatar : null;
        this.user = user;
        this.sets = user.setsPurchased;
        this.createForm();
      });
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.editUserForm = this.fb.group({
      username: [{value: this.exusername, disabled: true}],
      email: this.exemail,
      password: this.expassword,
      displayName: this.exdisplayname,
      avatar: this.exavatar,
    });
  }

  onSubmit() {
    this.userService.editUser(this.user._id, this.editUserForm.value)
      .subscribe(user => {
        console.log(user);
        this.getFormData(this.user._id);
      });
  }

}
