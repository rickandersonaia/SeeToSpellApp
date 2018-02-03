import {Component, OnInit, OnDestroy} from '@angular/core';
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
export class LearningPathEditComponent implements OnInit, OnDestroy {

  currentUser: any;
  learningPath: any;
  wordArrangementModifications = [];
  parentId: string;

  constructor(private cus: CurrentUserService,
              private lps: LearningPathService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute,
              private dragulaService: DragulaService) {

    this.dragulaService.setOptions('step-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });


    this.dragulaService.dropModel
      .subscribe((value) => {
        // console.log(`drag: ${value[0]}`);
        this.onDropModel(value.slice(1));
        // console.log(value);
      });


    this.dragulaService.drop
      .subscribe((value) => {
        // console.log(`drag: ${value[0]}`);
        this.onDrop(value.slice(1));
        // console.log(value);
      });
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    const learningPathId = this.route.snapshot.params['learningPathId'];
    this.getLearningPath(learningPathId);
  }

  private onDrop(args) {
    let [e, el] = args;

    const stepWordId = e.getAttribute('data-stepWordid');
    const wordId = e.getAttribute('data-wordid');
    const wordName = e.textContent;
    const sourceStepId = e.getAttribute('data-origstepid');
    const targetStepId = el.getAttribute('data-stepid');

    for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
      const learningStep = this.learningPath.learningSteps[index];
      // if it is the source step - delete the word
      if (sourceStepId === learningStep._id) {
        for (let windex = 0; windex < learningStep.words.length; windex++) {
          if (wordId === learningStep.words[windex].wordId) {
            this.learningPath.learningSteps[index].words.splice(windex, 1);
          }
        }
      }
      // if it is the target step - add the word
      if (targetStepId === learningStep._id) {
        this.learningPath.learningSteps[index].words.push({_id: stepWordId, wordId: wordId, wordName: wordName});
      }
    }
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
      const step = index + 1;
      this.learningPath.learningSteps[index].stepName = 'Step ' + step;
    }
  }

  getLearningPath(learningPathId) {
    return this.lps.getLearningPath(learningPathId)
      .subscribe(path => {
        this.learningPath = path;
      });
  }

  onSave() {
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

  ngOnDestroy() {
    this.dragulaService.destroy('step-bag');
    this.learningPath = {};
  }

}
