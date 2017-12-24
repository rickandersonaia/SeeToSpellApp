import {Component, Inject, Input} from '@angular/core';
import {UserDataModel} from '../../shared/userdatamodel';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent {

  @Input() user: UserDataModel;
  @Input() edit: boolean;

  constructor(@Inject('BaseURL') private BaseURL,
              @Inject('AvatarURL') private AvatarURL) {
  }

}
