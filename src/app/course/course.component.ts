import { Component, OnInit } from '@angular/core';
import {Lesson} from '../shared/lesson.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public lessons: Lesson[] = [
    new Lesson('Animals', 'This is a new animal lesson', 'Test'),
    new Lesson('Robots', 'This is a new robot lesson', 'Test')
  ];
  constructor() { }

  ngOnInit() {
  }

}
