import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {StudentDataModel, studentAvatars} from '../../core/shared/studentdatamodel';
import {StudentService} from '../../core/services/student.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {Location} from '@angular/common';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {MessageService} from '../../core/services/message.service';
import {WordService} from '../../core/services/word.service';
import {LearningPathService} from '../../core/services/learning-path.service';


@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss']
})
export class FirstStepsComponent implements OnInit {
  learningPathForm: FormGroup;
  newStudentForm: FormGroup;
  student: StudentDataModel;
  avatars = studentAvatars;
  parentId: string;
  currentUser: any;
  purchasedWords: any[];
  learningPathArray: any[];
  learningPath: any;
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
              private wordService: WordService,
              private studentService: StudentService,
              private lps: LearningPathService,
              private location: Location,
              private router: Router,
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
    this.wordService.getPurchasedWords(this.currentUser['_id'])
      .subscribe(words => {
        this.purchasedWords = words;
        this.learningPathArray = this.lps.createLearningPathArray(words);
      });
    this.createNewLearningPathForm();
    this.createNewStudentForm();
  }

  createNewLearningPathForm() {
    this.learningPathForm = this.fb.group({
      pathName: ['', Validators.required]
    });
  }

  createNewStudentForm() {
    this.newStudentForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      avatar: 'generic.jpeg',
      parentId: this.currentUser._id
    });

    this.newStudentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reset form validation messages
  }

  newLearningPathSubmit() {
    const pathName = this.learningPathForm.value.pathName;
    const LearningPath = this.defineNamedLearningPath(pathName, this.learningPathArray);
    return this.addLearningPath(LearningPath)
      .subscribe(path => {
        this.learningPath = path;
        this.messageService.sendMessage('You created the ' + pathName + ' Learning Path');
      },
        error => {
        this.messageService.sendMessage('There was a problem creating Learning Path');
      });
  }

  newStudentSubmit() {
    const newStudent: object = {};
    newStudent['displayName'] = this.newStudentForm.value.displayName;
    newStudent['avatar'] = this.newStudentForm.value.avatar;
    newStudent['parentId'] = this.newStudentForm.value.parentId;
    newStudent['learningPathId'] = this.learningPath._id;

    this.studentService.addStudent(newStudent)
      .subscribe(student => {
          console.log(student);
          this.messageService.sendMessage('You successfully created a new student');
          this.student = student;
          console.log(student);
          this.messageService.sendMessage('You created a new student!');
        },
        error => this.messageService.sendMessage('There was an error creating the student, please try again'));
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

  defineNamedLearningPath(name: string, learningPathArray: any[]) {
    const learningPath: object = {};
    learningPath['pathName'] = name;
    learningPath['parentId'] = this.currentUser['_id'];
    learningPath['learningSteps'] = learningPathArray;
    return learningPath;
  }

  addLearningPath(namedLearningPath) {
    return this.lps.addLearningPath(namedLearningPath);
  }

}
