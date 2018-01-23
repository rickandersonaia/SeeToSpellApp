import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {WordDataModel} from '../shared/worddatamodel';
import {StudentDataModel} from '../shared/studentdatamodel';
import {baseURL} from '../shared/baseurl';
import {CurrentUserService} from './current-user.service';
import {WordService} from './word.service';

@Injectable()
export class LearningPathService {
  currentUser: any;
  wordList: object[];
  wordObjectList: WordDataModel[];

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService,
              private cus: CurrentUserService,
              private wordService: WordService) {

    this.currentUser = this.cus.currentUser;
  }


  // createDefaultLearningPath(): Observable<any> {
  //
  //   return this.http.post(baseURL + 'tutor/learning-paths/new', learningPath)
  //     .catch(error => {
  //       return this.processHTTPMsgService.handleError(error);
  //     });
  //
  // }

  addLearningPath(formContent: any): Observable<any> {
    return this.http.post(baseURL + 'tutor/learning-paths/new', formContent)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  getWordObjectList(){
    const setsPurchased = Object.values(this.currentUser.setsPurchased);
  }

  getFreeWordObjectList(){
    return this.wordService.getFreeWords()
      .subscribe(list => {
        this.wordObjectList = list;
      });
  }

}
