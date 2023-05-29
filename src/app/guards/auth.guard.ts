import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {IAmService} from "../services/authentification/i-am.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public iAm: IAmService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.iAm.iAmUser.username === '') {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;

  }



}
