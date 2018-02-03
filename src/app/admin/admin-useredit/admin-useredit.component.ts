import {Component, OnInit, Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
              private studentService: StudentService,
              private lps: LearningPathService,
              private location: Location,
              private route: ActivatedRoute,
              private deleteroute: Router,
              private messageService: MessageService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.getFormData(id);
    this.createForm();
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
    console.log(this.exusername);
    this.editUserForm = this.fb.group({
      username: this.exusername,
      email: this.exemail,
      password: this.expassword,
      displayName: this.exdisplayname,
      avatar: this.exavatar,
      isTutor: this.existutor,
      isAdmin: this.exisadmin,
      parentId: this.exparentid,
      setsPurchased: this.exsetspurchased
    });
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
