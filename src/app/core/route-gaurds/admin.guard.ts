import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CurrentUserService} from '../services/current-user.service';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {

  public currentUser: any;

  constructor(private cus: CurrentUserService) {
    this.currentUser = this.cus.currentUser;
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.currentUser.isAdmin;
  }

  canActivateChild(next: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.currentUser.isAdmin;
  }
}
