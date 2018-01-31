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
import {MessageService} from './message.service';

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
              private learningStepService: LearningStepService,
              private messageService: MessageService) {

    this.currentUser = this.cus.currentUser;
  }


  createLearningPathArray(words: object[]) {
    this.learnPathArray = [];
    this.defaultLearningPath = [];

    let stepCntr = 1;
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      if (index % 3 === 0) {
        const wordObjectsInSet = words.slice(index, index + 3);
        const finalWordsInSet = [];
        for (let item = 0; item < wordObjectsInSet.length; item++) {
          const wordInSet = wordObjectsInSet[item];
          finalWordsInSet.push({wordId: wordInSet['_id'], wordName: wordInSet['name']});
        }
        this.learnPathArray.push({'stepName': 'Step ' + stepCntr, 'words': finalWordsInSet});
        stepCntr++;
      }
    }
    console.log(this.learnPathArray);
    return this.learnPathArray;
  }


  getLearningPath(learningPathId: string): Observable<any> {
    return this.http.get(baseURL + 'tutor/learning-paths/edit/' + learningPathId)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  updateLearningPath(data: any, learningPathId: string): Observable<any> {
    return this.http.put(baseURL + 'tutor/learning-paths/edit/' + learningPathId, data)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }


  getLearningPaths(id: string): Observable<any> {
    return this.http.get(baseURL + 'tutor/' + id + '/learning-paths')
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


  deleteLearningPath(learningPathId: string): Observable<any> {
    return this.http.delete(baseURL + 'tutor/learning-paths/edit/' + learningPathId)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }


  // createLearningPathArray(words: object[]) {
  //   this.learnPathArray = [];
  //   this.defaultLearningPath = [];
  //
  //   let stepCntr = 1;
  //   for (let index = 0; index < words.length; index++) {
  //     const word = words[index];
  //     if (index % 3 === 0) {
  //       const wordObjectsInSet = words.slice(index, index + 3);
  //       const finalWordsInSet = [];
  //       for (let item = 0; item < wordObjectsInSet.length; item++) {
  //         const wordInSet = wordObjectsInSet[item];
  //         finalWordsInSet.push(wordInSet['_id']);
  //       }
  //       this.learnPathArray.push({'name': 'Step ' + stepCntr, 'words': finalWordsInSet});
  //       stepCntr++;
  //     }
  //   }
  //   // console.log(this.learnPathArray);
  //   return this.learnPathArray;
  // }

}
