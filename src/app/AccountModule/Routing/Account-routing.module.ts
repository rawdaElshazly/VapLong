import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuardBuilder } from 'src/app/CallerModule/RoutingGaurds/GuardBuilder';
import { LoginComponent } from '../Components/login/login.component';
import { AuthComponent } from '../Components/Auth/auth.component';
export const AuthRoutes: Routes = [
  //{ path: 'login', component: LoginComponent  },

   {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [RouterModule]
})

export class AccountantRoutingModule { }

