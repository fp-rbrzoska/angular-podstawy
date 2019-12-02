import { Component } from '@angular/core';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = { name: 2};

  handleClick(ev, inputValue) {
    console.log(ev, inputValue);
  }

  handleHomeOutput(ev) {
    console.log(ev);
  }
}
