import { Component, OnInit } from '@angular/core';
import {LessonItem} from '../../shared/lessonItem.model';

@Component({
  selector: 'app-lesson-list-detail',
  templateUrl: './lesson-list-detail.component.html',
  styleUrls: ['./lesson-list-detail.component.scss']
})
export class LessonListDetailComponent implements OnInit {
  lessonItems: LessonItem[] = [
    new LessonItem('Funny youtube video', 'This is a funny video', 'path'),
    new LessonItem('Infographic', 'This is a chart', 'path')
  ];

  constructor() { }

  ngOnInit() {
  }

}
