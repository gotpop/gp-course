import {LessonItem} from './lessonItem.model';

export class Lesson {
  public name: string;
  public description: string;
  public imagePath: string;
  public lessonItems: LessonItem[];

  constructor(name: string, desc: string, imagePath: string, lessonItems: LessonItem[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.lessonItems = lessonItems;
  }

}
