import { ServerResult } from "src/app/CallerModule/Services/ServerResult";
export class  AnnualDashboardStatsModel extends  ServerResult
{
  public Stats!: Stats[];

}

class Stats
{
   Month!: string;
   TotalOnlineOrders!: number;
   TotalVaplongOrders!: number;
   TotalRefunds!: number;
   TotalPurchaseOrders!: number;
   TotalPurchaseRefundsOrders!: number
}
