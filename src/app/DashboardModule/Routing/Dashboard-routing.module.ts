import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuardBuilder } from 'src/app/CallerModule/RoutingGaurds/GuardBuilder';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';

export const DashboardRoutes: Routes = [
  //{ path: 'login', component: LoginComponent  },

   {
    path: '',
     canActivate: [GuardBuilder],
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'Dashboard',
        pathMatch: 'full',
      },
      {
        path: 'Dashboard',
        component: DashboardComponent,
        data: { returnUrl: window.location.pathname },
      },
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'Dashboard', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }

