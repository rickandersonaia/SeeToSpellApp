import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {UserDataModel} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';
import {AuthService} from '../../core/services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: ['./purchase-summary.component.scss']
})
export class PurchaseSummaryComponent implements OnInit {

  private user: UserDataModel;
  private sets: object;
  private setsToPurchase: number[];
  private currentUser: object;
  subscription: Subscription;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: AuthService ) {

    this.subscription = this.authService.getCurrentUser()
      .subscribe(currentUser => {
        console.log(currentUser);
        this.currentUser = currentUser;
      });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
}

  getUser(id) {
    this.userService.getTutorById(id)
      .subscribe(user => {
        console.log(id);
        this.user = user;
        this.sets = user.setsPurchased;
        this.setsToPurchase = this.getSetsToPurchase(this.sets);
        console.log(this.sets);
      });
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
