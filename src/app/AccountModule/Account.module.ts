import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { GuardBuilder } from '../CallerModule/RoutingGaurds/GuardBuilder';
import { PrivacyPolicyComponent } from '../Shared/Components/privacy-policy/privacy-policy.component';
import { TermsComponent } from '../Shared/Components/terms/terms.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthComponent } from './Components/Auth/auth.component';
import { AccountantRoutingModule } from './Routing/Account-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountantRoutingModule
    

  ],
  exports: [],
  entryComponents: [PrivacyPolicyComponent,TermsComponent],
  providers: [
  ]//for any services

})
export class AccountModule {

}
