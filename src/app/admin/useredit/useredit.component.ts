import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserDataModel, setsPurchasedOptions} from '../../shared/userdatamodel';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  editUserForm: FormGroup;
  user: UserDataModel;
  options = setsPurchasedOptions;
  public exusername: string;
  public exemail: string;
  public expassword: string;
  public exdisplayname: string;
  public exavatar: string;
  public existutor: boolean;
  public exisadmin: boolean;
  public exparentid: string;
  public exsetspurchased: object;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private location: Location,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
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
        this.existutor = user.isTutor ? user.isTutor : null;
        this.exisadmin = user.isAdmin ? user.isAdmin : null;
        this.exparentid = user.parentId ? user.parentId : null;
        this.exsetspurchased = user.setsPurchased ? user.setsPurchased : null;
        this.user = user;
        this.createForm();
      });
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.editUserForm = this.fb.group({
      username: this.exusername,
      email: this.exemail,
      password: this.expassword,
      displayname: this.exdisplayname,
      avatar: this.exavatar,
      istutor: this.existutor,
      isadmin: this.exisadmin,
      parentid: this.exparentid,
      setspurchased: this.exsetspurchased
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
