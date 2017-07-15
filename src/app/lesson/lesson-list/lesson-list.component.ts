import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  public lessons: Lesson[] = [];
  constructor() {}
  ngOnInit() {}

  addNewLesson() {
    this.lessons.push(new Lesson('Animals', 'This is a new animal lesson', 'Test'))
  }
}
