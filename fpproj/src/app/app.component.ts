import { Component } from '@angular/core';
import { MyUser, ISuperComponent } from './models/my-user.interface'
@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ISuperComponent {
  title = 'fpproj2';
  user: MyUser;

  fly(): MyUser {
    const test = { a: 1 };

    return {
      name: 'test',
      age: 1,
      id: 'asdsdsd'
     };
  }
}
