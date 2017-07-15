import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
 @Input() thisLesson: {name: string, description: string, imagePath: string};
  constructor() { }

  ngOnInit() {
  }

}
