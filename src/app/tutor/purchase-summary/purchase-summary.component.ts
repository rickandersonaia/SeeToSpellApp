import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {UserDataModel} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';
import {AuthService} from '../../core/services/auth.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: ['./purchase-summary.component.scss']
})
export class PurchaseSummaryComponent implements OnInit {

  private user: UserDataModel;
  public sets: object;
  public setsToPurchase: number[];
  public currentUser: any;
  subscription: Subscription;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);

    this.currentUser = this.currentUserService.currentUser;
    console.log(this.currentUser);
    this.sets = this.currentUser.setsPurchased;
    this.setsToPurchase = this.getSetsToPurchase(this.sets);
}

  getUser(id) {
  }


  getSetsToPurchase(sets) {
    let cntr = 1;
    let setsToPurchase = [];
    console.log(sets);
    const setsPurchased = Object.values(sets);

    while (cntr < 4) {
      if (!setsPurchased.includes(cntr)) {
        setsToPurchase.push(cntr);
      }
      cntr++;
    }
    return setsToPurchase;
  }

}
