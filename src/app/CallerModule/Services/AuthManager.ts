//====Imported Services==========
//=====Imported Classes ========
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from 'src/app/AccountModule/Model/UserModel';
@Injectable()

export class AuthManager {
  //=========Constructor=========
  constructor(
    private localStorage: CookieService
  ) {
    // this.decodedToken = new HomeLingoToken();
    this.jwtHelper = new JwtHelperService();
    let isTokenExist: boolean = this.localStorage.check('accessToken');
    let cookieToken = this.localStorage.get('accessToken');
    if (isTokenExist && cookieToken != 'null') this.Token = cookieToken;
  }
  //==========Private Members=====
  private token!: string;
  public User !:UserModel;
 // public decodedToken: HomeLingoToken;
  private jwtHelper: JwtHelperService;
  //=========Public Members=======
  public set Token(value: string) {
    ////debugger
    this.token = value;
    //this.decodeToken(this.token);
  }

  public getRefreshToken() {
    return this.localStorage.get('refreshToken');
  }
  public getAccesToken() {
    return this.localStorage.get('accessToken');
  }
  public setRefreshToken(refreshToken: string) {
    this.localStorage.set('refreshToken', refreshToken, {
      path: '/',
      sameSite: 'Strict'
   });
  }
  public setTokenExpiration(tokenExpiration: string) {
    this.localStorage.set('tokenExpiration', tokenExpiration, {
      path: '/',
      sameSite: 'Strict'
   });
  }
  public getTokenExpiration() {
    return this.localStorage.get('tokenExpiration');
  }
  public setRememberMe() {
    this.localStorage.set('rememberMe', 'yes'), {
      path: '/',
      sameSite: 'Strict'
   };
  }
  public setAccesToken(accessToken:string) {
    this.localStorage.set('accessToken', accessToken), {
      path: '/',
      sameSite: 'Strict'
   };
   this.Token = accessToken;
  }
  public getRememberMe() {
    return this.localStorage.get('rememberMe');
  }
  public get Name() {
    // if (this.decodedToken.Name)
    //  return this.decodedToken.Name;
     if (this.User.FirstName)
     return this.User.FirstName;
    return null;
  }

  public get Id() {
    // if (this.decodedToken.UserId) return this.decodedToken.UserId;
    if (this.User.ID) return this.User.ID;
    return null;
  }



  // private decodeToken(tok: string) {
  //   ////debugger
  //   if (tok) {
  //     this.decodedToken = this.extractToken(tok);
  //   } else this.decodedToken = new HomeLingoToken();
  // }

  // private extractToken(data: string) {
  //   ////debugger
  //   if (data) {
  //     try {
  //       let tempToken: any = this.jwtHelper.decodeToken(this.token);
  //      // let res: HomeLingoToken = new HomeLingoToken();

  //       // res.UserId = tempToken.UserId;
  //       // res.Email = tempToken.Email;
  //       // res.Name = tempToken.Name;

  //       let role = tempToken['role'];

  //       if (role instanceof Array) for (let ro of role) res.roles.push(ro);
  //       else res.roles.push(role);

  //       return res;
  //     } catch (ex) {
  //       return new HomeLingoToken();
  //     }
  //   } else return new HomeLingoToken();
  // }

  //=======Services ==============
  // /**Check if User in Role */
  /** Check if the current user is not autherized */
  public isAuthorizedUser() {
    if (this.token != null || this.User!=null) {
        return true;
      }
    return false;
  }
  public isTokenExpired() {
    if (this.token != null) {
      //====check token expiration
      var _tokenExpiration = new Date(Date.parse(this.getTokenExpiration()));
      var todayDate = new Date(Date.parse(Date()));
      if (todayDate > _tokenExpiration) {
        return true;
      }
    }
    return false;
  }

  public isRemembeMe() {
    var rememberMeVal = this.getRememberMe();
    if (rememberMeVal == 'yes') {
      return true;
    }
    return false;
  }

  /**Used To Sign Out */
  public signOut() {
    this.localStorage.delete('accessToken',"/");
    this.localStorage.delete('refreshToken',"/");
    this.localStorage.delete('tokenExpiration',"/");
    this.Token = '';
  }

  /**Used To Clear current token contents */
  public clear() {
    //this.decodedToken = new HomeLingoToken();
    this.localStorage.delete('accessToken');
    this.Token = '';
  }

  /**Used to authenticate current user */
  public authenticate(token: string) {
    this.Token = token;
    //localStorage.setItem("accessToken", token);
    this.localStorage.set('accessToken', token, {
      path: '/',
      sameSite: 'Strict'
   });
  }
  public SetUser(userModel :UserModel) {
  this.User =userModel;
  this.localStorage.set('UserId',`${userModel.ID}`, {
    path: '/',
    sameSite: 'Strict'
 });
  }

  public getUserId() {
    return this.User.ID;
  }

  // public decode(token: string): HomeLingoToken {
  //   return this.extractToken(token);
  // }
}
