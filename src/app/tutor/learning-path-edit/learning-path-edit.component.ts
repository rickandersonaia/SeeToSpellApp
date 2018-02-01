import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../core/services/message.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningPathService} from '../../core/services/learning-path.service';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-learning-path-edit',
  templateUrl: './learning-path-edit.component.html',
  styleUrls: ['./learning-path-edit.component.scss']
})
export class LearningPathEditComponent implements OnInit {

  currentUser: any;
  learningPath: any;
  parentId: string;

  constructor(private cus: CurrentUserService,
              private lps: LearningPathService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute,
              private dragulaService: DragulaService) {

    this.dragulaService.dropModel
      .subscribe((value) => {
        // console.log(`drag: ${value[0]}`);
        this.onDrop(value.slice(1));
        console.log(value);
      });
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    const learningPathId = this.route.snapshot.params['learningPathId'];
    this.getLearningPath(learningPathId);
  }

  getLearningPath(learningPathId){
    return this.lps.getLearningPath(learningPathId)
      .subscribe(path => {
        this.learningPath = path;
      });
  }

  onSave(){
    const learningPathId = this.route.snapshot.params['learningPathId'];
    return this.lps.updateLearningPath(this.learningPath, learningPathId)
      .subscribe(path => {
        this.learningPath = path;
        this.messageService.sendMessage('Your edits have been saved');
      },
        error => {
          this.messageService.sendMessage('There was a problem saving your changes');
        });
  }

  private onDrop(args) {
    let [el, target, source] = args;

    for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
      // console.log(this.learningPath.learningSteps[index]);
      const step = index + 1;
      this.learningPath.learningSteps[index].stepName = 'Step ' + step;
    }

    // do something
  }

}
