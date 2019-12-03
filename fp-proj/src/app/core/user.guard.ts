import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.isLoggedIn$.pipe(
      tap(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.navigate(['/home']);
        }
      })
    );
  }

}
