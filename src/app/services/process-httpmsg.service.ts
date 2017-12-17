import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { HttpResponse} from '@angular/common/http';

@Injectable()
export class ProcessHttpmsgService {

  constructor(private http: HttpClient) { }

  public extractData(res: HttpResponse<any>) {
    let body = res.json();

    return body || { };
  }

}
