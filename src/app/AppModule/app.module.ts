


import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../AppModule/Components/AppComponent/app.component';
import { AuthService } from '../AccountModule/services/AuthService';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from '../AccountModule/Routing/Account-routing.module';
import { CommonModule } from '@angular/common';
import {AccountModule }from '../AccountModule/Account.module';
import { ApiCallerService } from '../CallerModule/Services/APICaller';
import { AuthManager } from '../CallerModule/Services/AuthManager';


function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
      AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'Auth', children: AuthRoutes },
      // { path: 'Dashboard', children: DashboardRoutes },
      { path: '', redirectTo: 'Auth/login', pathMatch: 'full' },
    ]),
  ],
  providers: [
    AuthService ,
    ApiCallerService,
    AuthManager,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [AuthService],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
