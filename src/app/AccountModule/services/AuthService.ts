import { ApiCallerService } from 'src/app/CallerModule/Services/APICaller';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInModel } from '../Model/SignInModel';
import { map, Subject } from 'rxjs';
import { AuthManager } from 'src/app/CallerModule/Services/AuthManager';
import { APIs } from 'src/app/CallerModule/Data/APIS';
import { LoginResponseModel } from '../Model/Response/LoginResponseModel';
import { TokenResponseModel } from '../Model/Response/TokenResponseModel';
import { HttpParams } from '@angular/common/http';
import { UserModel } from '../Model/UserModel';


export type UserType = UserModel | undefined;

@Injectable()
export class AuthService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();
  public isExternalAuth!: boolean;
  currentUserSubject!: UserModel;

  token!: string;

  constructor(private router: Router, private apiCaller: ApiCallerService,private authManager: AuthManager
     ) {


  }
  signInUser(model: SignInModel) {
    return this.apiCaller.post<LoginResponseModel>(APIs.Account.Login, model,true,"").pipe(map(res => {
      this.currentUserSubject = res.UserModel
     return res;
    }));
  }
  GetToken(model: SignInModel) {
    const body = new HttpParams()
    .set('username', model.UserName)
    .set('password', model.Password)
    .set('grant_type', model.grant_type);
    return this.apiCaller.postXform<TokenResponseModel>(APIs.Account.token, body,true,"").pipe(map(res => {
     return res;
    }));
  }
   handleRefreshToken() {
    let model = {
      accessToken: this.authManager.getAccesToken(),
      refreshToken: this.authManager.getRefreshToken()
    }
    //this.apiCaller.post(APIs.Account.RefreshToken, model,true,"").subscribe(res => {
      // if (res.statusCode==200)
      //   this.authManager.authenticate(res.responseObject);
   // });
  }
  getToken() {
    return this.token
  }
  isAuthenticate() {
    return this.token != null;
  }

  Logout() {
    debugger
    this.token = "";
    this.authManager.signOut();
    this.authManager.clear();
  }





}
