import {Component, OnInit} from '@angular/core';
import {WordService} from '../../core/services/word.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from '../../core/services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learning-path-add',
  templateUrl: './learning-path-add.component.html',
  styleUrls: ['./learning-path-add.component.scss']
})
export class LearningPathAddComponent implements OnInit {
  currentUser: any[];
  purchasedWords: any[];
  learningPathArray: any[];
  learningPath: any;
  learningPathForm: FormGroup;

  constructor(private fb: FormBuilder,
              private wordService: WordService,
              private cus: CurrentUserService,
              private lps: LearningPathService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.wordService.getPurchasedWords(this.currentUser['_id'])
      .subscribe(words => {
        this.purchasedWords = words;
        this.learningPathArray = this.lps.createLearningPathArray(words);
      });
    this.createNewLearningPathForm();
  }

  createNewLearningPathForm() {
    this.learningPathForm = this.fb.group({
      pathName: ['', Validators.required]
    });
  }

  onSubmit() {
    const pathName = this.learningPathForm.value.pathName;
    const LearningPath = this.defineNamedLearningPath(pathName, this.learningPathArray);
    return this.addLearningPath(LearningPath)
      .subscribe(path => {
          this.learningPath = path;
          console.log(this.learningPath);
          this.messageService.sendMessage('You created the ' + pathName + ' Learning Path');
          this.router.navigateByUrl('/tutor/' + this.currentUser['_id'] + '/learning-paths');
        },
        error => {
          this.messageService.sendMessage('There was a problem creating Learning Path');
        });
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
