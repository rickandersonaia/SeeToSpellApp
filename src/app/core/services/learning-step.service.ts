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

@Injectable()
export class LearningStepService {
  currentUser: any;
  learnPathArray: any[];
  defaultLearningPath: any[];
  wordObjectList: WordDataModel[];

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService,
              private cus: CurrentUserService,
              private wordService: WordService) {

    this.currentUser = this.cus.currentUser;
  }

  addDefaultSteps(stepData: any): Observable<any[]> {
    return this.http.post(baseURL + 'tutor/learning-steps/new', stepData)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

  getLeaningStepById(id: any): Observable<any[]> {
    return this.http.get(baseURL + 'tutor/learning-steps/:learningStepId', id)
      .catch(error => this.processHTTPMsgService.handleError(error));

  }

}
