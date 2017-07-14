import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = [
    new Lesson('Test', 'Test', 'Test')
  ];
  constructor() {
    console.log(this.lessons, 'lessonita')
  }

  ngOnInit() {
  }

}
