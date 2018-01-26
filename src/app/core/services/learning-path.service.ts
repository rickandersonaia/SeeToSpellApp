import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {WordDataModel} from '../shared/worddatamodel';
import {baseURL} from '../shared/baseurl';
import {CurrentUserService} from './current-user.service';
import {WordService} from './word.service';
import {LearningStepService} from './learning-step.service';

@Injectable()
export class LearningPathService {
  currentUser: any;
  learnPathArray: any[];
  defaultLearningPath: any[];
  wordObjectList: WordDataModel[];

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService,
              private cus: CurrentUserService,
              private wordService: WordService,
              private learningStepService: LearningStepService) {

    this.currentUser = this.cus.currentUser;
  }

  createDefaultLearningPath(learningPathArray: any[]){
    for (let index = 0; index < learningPathArray.length; index++) {
      const step = learningPathArray[index];
    }
  }


  createDefaultLearningPathArray(words: object[]) {
    this.learnPathArray = [];
    this.defaultLearningPath = [];
    // let setcntr = 1;
    // this.learnPathArray = words.map((word, index) => {
    //   if (index % 3 === 0) {
    //     const stepwords = words.slice(index, index + 3).map(w => w['_id']);
    //     const data = {'name': 'Step ' + setcntr, 'words': stepwords};
    //     setcntr++;
    //     return data;
    //   }
    //   return '';
    //
    // }).filter(item => item);
    // return this.learnPathArray;

    let stepCntr = 1;
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      if (index % 3 === 0) {
        const wordObjectsInSet = words.slice(index, index + 3);
        const finalWordsInSet = [];
        for (let item = 0; item < wordObjectsInSet.length; item++) {
          const wordInSet = wordObjectsInSet[item];
          finalWordsInSet.push(wordInSet['_id']);
        }
        this.learnPathArray.push({'name': 'Step ' + stepCntr, 'words': finalWordsInSet});
        stepCntr++;
      }
    }
    console.log(this.learnPathArray);
    return this.learnPathArray;
  }


  getLearningPaths(id: string): Observable<any> {
    return this.http.post(baseURL + 'tutor/' + id + '/learning-paths', id)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  addLearningPath(data: any): Observable<any> {
    return this.http.post(baseURL + 'tutor/learning-paths/new', data)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  getWordObjectList() {
    const setsPurchased = Object.values(this.currentUser.setsPurchased);
  }

  getFreeWordObjectList() {
    return this.wordService.getFreeWords()
      .subscribe(list => {
        this.wordObjectList = list;
      });
  }

}
