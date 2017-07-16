import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../shared/lesson.service';
import {Lesson} from '../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list-detail-single',
  templateUrl: './lesson-list-detail-single.component.html',
  styleUrls: ['./lesson-list-detail-single.component.scss']
})

export class LessonListDetailSingleComponent implements OnInit {
  thisLesson;
  localLessonItems;

  constructor(private lessonService: LessonService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lessonService.lessonSelected.subscribe(
      (SubscribedLesson: Lesson) => {
        this.thisLesson = SubscribedLesson;
        console.log('Single page object: ', this.thisLesson)
        this.localLessonItems = SubscribedLesson.lessonItems;
        console.log('This is the subscribed lesson: ', this.thisLesson)
      }
    );

    console.log(this.route.snapshot.params['id']);
  }

}
