import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {StudentDataModel, studentAvatars} from '../../core/shared/studentdatamodel';
import {StudentService} from '../../core/services/student.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {Location} from '@angular/common';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {MessageService} from '../../core/services/message.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  editStudentForm: FormGroup;
  student: StudentDataModel;
  avatars = studentAvatars;
  parentId: string;
  currentUser: any;
  exdisplayname: string;
  exavatar: string;

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
              private studentService: StudentService,
              private location: Location,
              private router: Router,
              private deleteRoute: Router,
              private route: ActivatedRoute,
              private cus: CurrentUserService,
              private messageService: MessageService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {

  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    const id = this.route.snapshot.params['studentId'];
    this.getFormData(id);
    this.createForm();
  }

  getFormData(id) {
    this.studentService.getStudentById(id)
      .subscribe(student => {
        this.exdisplayname = student.displayName ? student.displayName : null;
        this.exavatar = student.avatar ? student.avatar : null;
        this.student = student;
        this.createForm();
      });
  }

  createForm() {
    this.editStudentForm = this.fb.group({
      displayName: [this.exdisplayname, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: this.exavatar,
    });

    this.editStudentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.editStudentForm) {
      return;
    }
    const form = this.editStudentForm;

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
    this.studentService.editStudent(this.student._id, this.editStudentForm.value)
      .subscribe(student => {
          this.messageService.sendMessage('You successfully edited your student');
          this.student = student;
          this.router.navigateByUrl('/tutor/' + this.currentUser._id + '/students');
        },
        error => this.messageService.sendMessage('There was an error editing the student, please try again'));
    this.editStudentForm.reset();
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student._id)
      .subscribe(student => {
        this.messageService.sendMessage('You successfully deleted ' + this.student.displayName);
        this.router.navigateByUrl('/tutor/' + this.currentUser._id + '/students');
      },
        error => this.messageService.sendMessage('There was an error deleting ' + this.student.displayName + ', please try again'));
  }

  goBack(): void {
    this.location.back();
  }

}
