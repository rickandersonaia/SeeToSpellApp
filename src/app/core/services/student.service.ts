import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ProcessHTTPMsgService} from './process-httpmsg.service';
import {StudentDataModel} from '../shared/studentdatamodel';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  addStudent(formContent: any): Observable<StudentDataModel> {
    return this.http.post(baseURL + 'tutor/students/new', formContent)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  addFirstStudent(formContent: any, learningPath: any): Observable<StudentDataModel> {
    formContent.push({learningPathId: learningPath});
    return this.http.post(baseURL + 'tutor/students/new', formContent)
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });

  }

  getStudentsByParentId(parentId: string): Observable<StudentDataModel[]> {
    return this.http.get(baseURL + 'tutor/' + parentId + '/students')
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  getStudentById(id: string): Observable<StudentDataModel> {
    return this.http.get(baseURL + 'tutor/students/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  editStudent(id: string, formContent: any): Observable<StudentDataModel> {
    return this.http.put(baseURL + 'tutor/students/edit/' + id, formContent)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }

  deleteStudent(id: string): Observable<StudentDataModel> {
    console.log(id);
    return this.http.delete(baseURL + 'tutor/students/edit/' + id)
      .catch(error => this.processHTTPMsgService.handleError(error));
  }


}
