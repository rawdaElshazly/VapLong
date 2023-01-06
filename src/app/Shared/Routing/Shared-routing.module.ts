import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { GuardBuilder } from 'src/app/CallerModule/RoutingGaurds/GuardBuilder';
import { HeaderComponent } from '../Components/header/header.component';
export const SharedRoutes:Routes=[
        {path:'Header',component:HeaderComponent,canActivate: [GuardBuilder] },
];
@NgModule({
  imports: [
    RouterModule.forChild(SharedRoutes)
  ],
  exports: [RouterModule]
})

export class SharedRoutingModule { }

