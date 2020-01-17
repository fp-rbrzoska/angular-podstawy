import { Component } from '@angular/core';
import { MyUser, ISuperComponent } from './models/my-user.interface';
import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ISuperComponent {
  title = 'fpproj2';
  user: MyUser;

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  loginActionHandler() {
    this.authService.isLoggedIn ? this.authService.logOut() : this.authService.logIn();
  }

  fly(): MyUser {
    const test = { a: 1 };

    return {
      name: 'test',
      age: 1,
      id: 'asdsdsd'
     };
  }
}
