import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = { name: 2};
  user: User = {
    name: 'Alojzy',
    age: 67
  };

  handleClick(ev, inputValue) {
    console.log(ev, inputValue);
  }

  handleHomeOutput(ev) {
    console.log(ev);
  }
}
