import {Component, OnInit} from '@angular/core';
import {WordService} from '../../core/services/word.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';
import {LearningStepService} from '../../core/services/learning-step.service';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {concat} from 'rxjs/observable/concat';
import {combineLatest} from 'rxjs/observable/combineLatest';

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

  constructor(private wordService: WordService,
              private cus: CurrentUserService,
              private lps: LearningPathService,
              private lss: LearningStepService) {
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.wordService.getPurchasedWords(this.currentUser['_id'])
      .subscribe(words => {
        this.purchasedWords = words;
        this.learningPathArray = this.lps.createDefaultLearningPathArray(words);
      });
  }

  createDefaultLearningStepsAndLearningPath() {
    let stepIds: string[];
    this.saveDefaultStepsAndReturnStepIds()
      .subscribe(steps => {
        console.log(steps);
        stepIds = steps.map(step => {
          return step['_id'];
        });
        console.log(stepIds);
        const defaultLearningPath = this.defineNamedLearningPath('Default', stepIds);
        this.addLearningPath(defaultLearningPath)
          .subscribe(path => this.learningPath = path );
      });

  }

  saveDefaultStepsAndReturnStepIds() {
    const observables = [];
    for (let index = 0; index < this.learningPathArray.length; index++) {
      const step = this.learningPathArray[index];
      observables.push(this.lss.addDefaultSteps(step));
    }
    return combineLatest(observables);
  }

  defineNamedLearningPath(name: string, stepIds: string[]) {
    const learningPath: object = {};
    learningPath['parentId'] = this.currentUser['_id'];
    learningPath['name'] = name;
    learningPath['learningSteps'] = stepIds;
    return learningPath;
  }

  addLearningPath(namedLearningPath) {
    return this.lps.addLearningPath(namedLearningPath);
  }
}
