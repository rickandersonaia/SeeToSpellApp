import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {StudentDataModel, studentAvatars} from '../../core/shared/studentdatamodel';
import {StudentService} from '../../core/services/student.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {Location} from '@angular/common';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {MessageService} from '../../core/services/message.service';
import {LearningPathService} from '../../core/services/learning-path.service';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  newStudentForm: FormGroup;
  student: StudentDataModel;
  avatars = studentAvatars;
  parentId: string;
  currentUser: any;
  pathOptions: object;
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
              private route: ActivatedRoute,
              private cus: CurrentUserService,
              private messageService: MessageService,
              private lps: LearningPathService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {

  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.createSelectOptionsList();
    this.createForm();
  }

  createForm() {
    this.newStudentForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: 'generic.jpeg',
      parentId: this.currentUser._id,
      learningPathId: ''
    });

    this.newStudentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.newStudentForm) {
      return;
    }
    const form = this.newStudentForm;

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
    this.studentService.addStudent(this.newStudentForm.value)
      .subscribe(student => {
          console.log(student);
          this.messageService.sendMessage('You successfully created a new student');
          this.student = student;
          this.router.navigateByUrl('/tutor/' + this.currentUser._id + '/students');
        },
        error => this.messageService.sendMessage('There was an error creating the student, please try again'));
    this.newStudentForm.reset();
  }

  createSelectOptionsList() {
    return this.lps.getLearningPaths(this.currentUser._id)
      .subscribe(paths => {
          const pathOptions = [];
          if (paths.length > 0) {
            for (let index = 0; index < paths.length; index++) {
              const path = paths[index];
              pathOptions.push({'id': path['_id'], 'label': path['pathName']});
            }
            this.pathOptions = pathOptions;
          } else {
            this.pathOptions = [{'id': 'none',  'label': 'You don\'t have any learning paths created'}];
          }
        },
        error => (console.log('createSelectOptionsList() FAILED!')));
  }

  goBack(): void {
    this.location.back();
  }


}
