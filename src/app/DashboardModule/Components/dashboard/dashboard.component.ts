import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodayHeadQuarterDashBoardStatsCountModel } from '../../Model/Response/TodayHeadQuarterDashBoardStatsCountModel';
import { SearchCriteriaModel } from '../../Model/SearchCriteriaModel';
import { DashboardService } from '../../services/DashboardService';
import { AnnualDashboardStatsModel } from '../../Model/Response/AnnualDashboardStatsModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[DashboardService ]

})
export class DashboardComponent implements OnInit {
  
  
  searchCriteriaModel! : SearchCriteriaModel;
  todayHeadQuarterDashBoardStatsCountModel$! :Observable<TodayHeadQuarterDashBoardStatsCountModel>;
  AnnualDashboardStatsForPurchase$! :Observable<AnnualDashboardStatsModel>;
  AnnualDashboardStatsForrSale$! :Observable<AnnualDashboardStatsModel>;


  constructor(private dashboardService: DashboardService)
   {
   }
   
   StatsYearChangedHandler(Year: string) {
    debugger;
    this.searchCriteriaModel.FromDate = new Date(`${Year}-01-01`);
    this.searchCriteriaModel.ToDate = new Date(`${Year}-12-31`);

    this.GetAnnualDashboardStatsForSale();
  }
  PurchaseYearChangedHandler(Year: string) {
    debugger;
    this.searchCriteriaModel.FromDate = new Date(`${Year}-01-01`);
    this.searchCriteriaModel.ToDate = new Date(`${Year}-12-31`);
    this.GetAnnualDashboardStatsForPurchase();
  }

  ngOnInit(): void {
    this.searchCriteriaModel = new SearchCriteriaModel();
   var currentYear = new Date().getFullYear(); // 2020
    this.searchCriteriaModel.FromDate = new Date(`${currentYear}-01-01`);
    this.searchCriteriaModel.ToDate = new Date(`${currentYear}-12-31`);
    this.GetTodayHeadQuarterDashBoardStatsCount();
    this.GetAnnualDashboardStatsForPurchase();
    this.GetAnnualDashboardStatsForSale();


  }
  GetTodayHeadQuarterDashBoardStatsCount(){
    this.todayHeadQuarterDashBoardStatsCountModel$ =this.dashboardService.GetTodayHeadQuarterDashBoardStatsCount(this.searchCriteriaModel)
  }
  GetAnnualDashboardStatsForPurchase(){
    this.AnnualDashboardStatsForPurchase$= this.dashboardService.GetAnnualDashboardStatsForPurchase(this.searchCriteriaModel)
 }
 GetAnnualDashboardStatsForSale(){
  this.AnnualDashboardStatsForrSale$= this.dashboardService.GetAnnualDashboardStatsForSale(this.searchCriteriaModel)
}

 
}
