import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentUserService {

  public currentUser: any;
  public currentUserSrc = new BehaviorSubject(null);

  constructor(private router: Router) {
  }


  setCurrentUser(currentUser: object) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.currentUserSrc.next(currentUser);
    this.currentUser = currentUser;
  }

  getCurrentUser() {
     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === null){
      this.router.navigateByUrl('/home');
      return null;
    }else{
      this.setCurrentUser(currentUser);
      return currentUser;
    }
  }

  clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }

}
