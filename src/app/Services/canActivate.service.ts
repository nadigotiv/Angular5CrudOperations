
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConstant } from './appConstant.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _authService: AppConstant, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (window.localStorage.getItem("Role")=="Admin") {
        return true;
    }
else

    // navigate to login page
    //this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}