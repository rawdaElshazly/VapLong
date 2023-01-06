import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { KendoUIModule } from '../KendoUIModule/KendoUIModule';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    KendoUIModule
  ],
  declarations: [
    HeaderComponent,
    PrivacyPolicyComponent,
    TermsComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [ ],

  entryComponents: []
})

export class SharedModule { }
