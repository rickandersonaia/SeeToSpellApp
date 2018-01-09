import {Component, OnInit, Inject} from '@angular/core';

import {WordDataModel} from '../../core/shared/worddatamodel';
import {WordService} from '../../core/services/word.service';
import {MessageService} from '../../core/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  freewords: WordDataModel[];

  constructor(private wordservice: WordService,
              private messageService: MessageService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
  }

  ngOnInit() {
    this.wordservice.getFreeWords()
      .subscribe(freewords => this.freewords = freewords);
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }

}
