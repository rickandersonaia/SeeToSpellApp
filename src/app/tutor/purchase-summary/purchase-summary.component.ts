import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {UserDataModel} from '../../core/shared/userdatamodel';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: ['./purchase-summary.component.scss']
})
export class PurchaseSummaryComponent implements OnInit {

  private user: UserDataModel;
  private sets: object;
  private setsToPurchase: number[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
    console.log(this.sets);
  }

  getUser(id) {
    this.userService.getUserById(id)
      .subscribe(user => {
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
