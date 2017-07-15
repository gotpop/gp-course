import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../shared/lesson.model';
import {LessonService} from '../../shared/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[];
  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }

  addNewLesson() {
    // this.lessons.push(new Lesson('Animals', 'This is a new animal lesson', 'Test'))
  }
}
