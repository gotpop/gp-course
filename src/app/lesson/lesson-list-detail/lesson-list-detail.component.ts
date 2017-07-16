import { Component, OnInit } from '@angular/core';
import {LessonItem} from '../../shared/lessonItem.model';
import {LessonService} from '../../shared/lesson.service';
import {Lesson} from '../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list-detail',
  templateUrl: './lesson-list-detail.component.html',
  styleUrls: ['./lesson-list-detail.component.scss']
})
export class LessonListDetailComponent implements OnInit {
  // lessonItems: LessonItem[] = [
  //   new LessonItem('Funny youtube video', 'This is a funny video', 'path'),
  //   new LessonItem('Info graphic', 'This is a chart', 'path')
  // ];
  thisLesson;
  localLessonItems;
  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessonService.lessonSelected.subscribe(
      ( SubscribedLesson: Lesson ) => {
        this.thisLesson = SubscribedLesson;
        this.localLessonItems = SubscribedLesson.lessonItems;
        console.log('This is the subscribed lesson: ', this.thisLesson)
      }
    )
  }

}
