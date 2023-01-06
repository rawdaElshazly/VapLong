import { ApiCallerService } from 'src/app/CallerModule/Services/APICaller';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';
import { AuthManager } from 'src/app/CallerModule/Services/AuthManager';
import { APIs } from 'src/app/CallerModule/Data/APIS';
import { SearchCriteriaModel } from '../Model/SearchCriteriaModel';
import { TodayHeadQuarterDashBoardStatsCountModel } from '../Model/Response/TodayHeadQuarterDashBoardStatsCountModel';
import { AnnualDashboardStatsModel } from '../Model/Response/AnnualDashboardStatsModel';
import { TopProductModel } from '../Model/Response/TopProductModel';

@Injectable()
export class DashboardService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();
  public isExternalAuth!: boolean;
  token!: string;

  constructor(private router: Router, private apiCaller: ApiCallerService,private authManager: AuthManager
     ) {


  }


  GetTopProductByPurchaseForDashboard(model :SearchCriteriaModel)
  {
    return this.apiCaller.post<TopProductModel>(APIs.Report.GetTopProductByPurchaseForDashboard, model,true,"").pipe(map(res => {
    return res;
   }));

  }

  GetAnnualDashboardStatsForPurchase(model :SearchCriteriaModel)
  {
    return this.apiCaller.post<AnnualDashboardStatsModel>(APIs.Report.GetAnnualDashboardStatsForPurchase, model,true,"").pipe(map(res => {
    return res;
   }));

  }

  GetAnnualDashboardStatsForSale(model :SearchCriteriaModel)
  {
    return this.apiCaller.post<AnnualDashboardStatsModel>(APIs.Report.GetAnnualDashboardStatsForSale, model,true,"").pipe(map(res => {
    return res;
   }));

  }
  GetTopProductBySaleForDashboard(model :SearchCriteriaModel)
  {
    return this.apiCaller.post<TopProductModel>(APIs.Report.GetTopProductBySaleForDashboard, model,true,"").pipe(map(res => {
    return res;
   }));

  }
  GetTodayHeadQuarterDashBoardStatsCount(model :SearchCriteriaModel)
  {
    return this.apiCaller.post<TodayHeadQuarterDashBoardStatsCountModel>(APIs.Report.GetTodayHeadQuarterDashBoardStatsCount, model,true,"").pipe(map(res => {
    return res;
   }));

  }
}
