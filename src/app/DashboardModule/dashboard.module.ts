import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../_metronic/partials';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnnualDashboardStatsComponent } from './Components/annual-dashboard-stats/annual-dashboard-stats.component';

@NgModule({
  declarations: [DashboardComponent, AnnualDashboardStatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ],
})
export class DashboardModule {}
