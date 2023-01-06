//====Imported Services==========
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthManager } from '../Services/AuthManager';

//=====Imported Classes ========

@Injectable()
export class NotAutherizedGuard implements CanActivate {

    //=========Constructor=========
    constructor(private authHelper: AuthManager) { }

    //=======Services ==============
    canActivate(){
        let result =!this.authHelper.isAuthorizedUser();
        return result ;
    }
}
