import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
//import { AuthServiceService } from 'src/app/AccountModule/Services/AuthServiceService';
import { APIs } from '../Data/APIS';
import { AuthManager } from '../Services/AuthManager';

//import all the guards in the application

@Injectable({providedIn:"root"})
export class GuardBuilder implements CanActivate {
  //you may need to include dependencies of individual guards if specified in guard constructor
  constructor(
    private authHelper: AuthManager,
    private router: Router,
   // private authServiceService: AuthServiceService
  ) {}

  private route!: ActivatedRouteSnapshot;
  private state!: RouterStateSnapshot;

  //This method gets triggered when the route is hit
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.route = route;
    this.state = state;

    if (!route.data) return false;

    // if (!this.route.data.roles || !this.route.data.roles.length)
    //   return false;

    let res = this.hasAccess();
    if (res==false) {
      this.router.navigate(['/auth/login']);
    }
    return res;
  }
  private hasAccess() {
    //debugger
    ////debugger
    if (this.authHelper.isAuthorizedUser()) {
      if (this.authHelper.isTokenExpired()) {
        if (this.authHelper.isRemembeMe()) {
          //this.authServiceService.handleRefreshToken();
          return true;
        }
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
}
