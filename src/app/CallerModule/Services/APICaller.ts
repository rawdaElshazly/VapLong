
import { HttpClient, HttpHeaders, HttpParams, HttpStatusCode} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ServerResult } from './ServerResult';
import { catchError, throttleTime, map } from 'rxjs';
import { throwError } from 'rxjs';
import { AuthManager } from './AuthManager';
import { APIs } from '../Data/APIS';
import { RequestMethod } from '../Data/RequestMethod';

@Injectable()
export class ApiCallerService {
  public domainName = APIs.ApiUrl.Url ;

  private serviceApiUrl: string;
  private loaderFlg = false;
  constructor(private httpClient: HttpClient, private authManager: AuthManager, private router: Router) {
    this.serviceApiUrl = this.domainName ;
  }
  public getHeaders(contentType: string = 'application/json') {
    let token = this.authManager.getAccesToken();
    if (token)
    return new HttpHeaders({
      'Content-Type': contentType,
      'Authorization': 'Bearer ' + token,
      "APIKey":"AccuritaAPIKey987654321"
    });
    else
    return new HttpHeaders({
      'Content-Type': contentType,
      "APIKey":"AccuritaAPIKey987654321"

    })
  };

  public serverRequest<T>(method: string, url: string, body: any, auth: boolean = true, loader: string, handleError: boolean = true,IsContentTypeJson: boolean=true): Observable<T> {
    let fUrl = this.serviceApiUrl + url;
    let requestOptions;
    if(IsContentTypeJson)
{
     requestOptions = {
      body: JSON.stringify(body),
      headers: this.getHeaders()
    };
  }else{


    requestOptions = {
      body: body,
      headers: this.getHeaders("application/x-www-form-urlencoded")
    };
  }
    this.showLoader();

    // call service
    var response = this.httpClient.request(method, fUrl, requestOptions);
    return response.pipe(catchError(error =>
      {
         this.handleError(error, handleError);
         return response;
    }

      )).pipe(map((response: any) => {
        setTimeout(this.hideLoader, 1000);
      return response;
    }));
  }

  public post<T>(url: string, body: any, auth: boolean = true, loader: string, handleError: boolean = true ): Observable<T> {
    return this.serverRequest<T>(RequestMethod.Post, url, body, auth, loader);
  }
  public postXform<T>(url: string, body: HttpParams, auth: boolean = true, loader: string, handleError: boolean = true ): Observable<T> {
    return this.serverRequest<T>(RequestMethod.Post, url, body, auth, loader,true,false);
  }
  public put<T>(url: string, body: any, auth: boolean = true, loader: string , handleError: boolean = true): Observable<T> {
    return this.serverRequest<T>(RequestMethod.Put, url, body, auth, loader, handleError);
  }

  public delete<T>(url: string, body: any, auth: boolean = true, loader: string , handleError: boolean = true): Observable<T> {
    return this.serverRequest<T>(RequestMethod.Delete, url, body, auth, loader, handleError);
  }

  public get<T>(url: string, auth: boolean = true, loader: string , handleError: boolean = true): Observable<T> {
    return this.serverRequest<T>(RequestMethod.Get, url, null, auth, loader, handleError);
  }


  // Handle Error
  private handleError(response:any, viewError: boolean) {
    ////debugger
    this.hideLoader();
    // var result= response.error.errors;
    //   var _res = result as ServerResult<any>;
    //   return  _res;
  }

  // Handle Refresh Token

  // On Start To Show Loader
  private showLoader() {
    this.loaderFlg = true;
    document.getElementById("loader-5")!.style.display = "block";
  }

  private hideLoader() {
    this.loaderFlg = false;
    document.getElementById("loader-5")!.style.display = "none";
  }

}
