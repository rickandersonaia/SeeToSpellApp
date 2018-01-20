import {Component, Inject, OnInit} from '@angular/core';
import {StudentDataModel} from '../../core/shared/studentdatamodel';
import {StudentService} from '../../core/services/student.service';
import {CurrentUserService} from '../../core/services/current-user.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: StudentDataModel[];
  currentUser: any;
  parentId: string;

  constructor(private studentService: StudentService,
              private cus: CurrentUserService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) { }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    this.studentService.getStudentsByParentId(this.parentId)
      .subscribe(students => {
        this.students = students;
      });
  }

}
