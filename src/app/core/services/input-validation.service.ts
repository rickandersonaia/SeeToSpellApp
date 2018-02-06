import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InputValidationService {


  constructor(private userService: UserService) {
  }


  checkForUniqueUsername(control: FormControl): Promise<any> | Observable<any> {
    const checkValue = '?username=' + control.value;
    const promise = new Promise((resolve => {
      this.userService.duplicateUserCheck(checkValue)
        .subscribe(resp => {
          if (resp.notunique === true) {
            resolve({notunique: true});
          } else {
            resolve(null);
          }
        });
    }));
    return promise;
  }


  checkForUniqueEmail(control: FormControl): Promise<any> | Observable<any> {
    const checkValue = '?email=' + control.value;
    const promise = new Promise((resolve => {
      this.userService.duplicateUserCheck(checkValue)
        .subscribe(resp => {
          if (resp.notunique === true) {
            resolve({notunique: true});
          } else {
            resolve(null);
          }
        });
    }));
    return promise;
  }


}
