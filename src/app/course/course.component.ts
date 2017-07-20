import { Component, OnInit } from '@angular/core';
import {Lesson} from '../shared/lesson.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public lessons: Lesson[] = [
    new Lesson('Animals', 'This is a new animal lesson', 'Test', []),
    new Lesson('Robots', 'This is a new robot lesson', 'Test', [])
  ];
  public groups: Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'},{name: 'Item B'},{name: 'Item C'},{name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'},{name: 'Item 2'},{name: 'Item 3'},{name: 'Item 4'}]
    }
  ];
  constructor() { }

  ngOnInit() {
  }



}
