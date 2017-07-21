import {Component, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public groups: Array<any> = [
    { name: 'Item A',
      class: 'is-danger'
    },
    {name: 'Item B',
      class: 'is-warning'
    },
    {name: 'Item C',
      class: 'is-success'
    },
    {name: 'Item D',
      class: 'is-primary'
    }
  ];

  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      console.log('Drag Value: ', this.groups)
      this.onDropModel(value.slice(1));

    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  ngOnInit() {

  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

}
