import { AuthServiceService } from './AuthService';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private authService:AuthServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.isAuthenticate()
  }

}
