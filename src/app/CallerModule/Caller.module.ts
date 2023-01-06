import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthManager } from './Services/AuthManager';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [ ],
  exports: [  ],
  providers: [
    AuthManager
      ]
})
export class CallerModule { }
