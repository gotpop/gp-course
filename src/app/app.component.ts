import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mashow = false
  maClick() {
      console.log('Ma click"')
      let ma = this.mashow
        this.mashow = !ma
  }
}
