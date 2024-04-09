import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {IAmService} from "../services/authentification/i-am.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(public iAm: IAmService, public router: Router) {}

  canActivate() {

    if (this.iAm.iAmUser.username === '') {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;

  }



}
