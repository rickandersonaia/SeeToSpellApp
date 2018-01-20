import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDataModel} from '../../core/shared/studentdatamodel';
import {StudentService} from '../../core/services/student.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {Router, Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  student: StudentDataModel;
  currentUser: any;
  parentId: string;
  link: string;

  constructor(private studentService: StudentService,
              private cus: CurrentUserService,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL,
              @Inject('AvatarURL') private AvatarURL) {
  }

  ngOnInit() {
    const studentId = this.route.snapshot.params['studentId'];
    this.parentId = this.cus.currentUser._id;
    this.link = '/tutor/students/edit/' + studentId;

    console.log(this.link);
    this.studentService.getStudentById(studentId)
      .subscribe(student => {
        this.student = student;
      });
  }

}
