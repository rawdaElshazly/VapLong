import { ServerResult } from "src/app/CallerModule/Services/ServerResult";

export class TodayHeadQuarterDashBoardStatsCountModel extends  ServerResult
{
  TodaySales!: number;
  TodayPurchases!: number;
  TodayExpenses!: number;
  TodayProfit!: number;
  TotalCustomerBalance!: number;
  TotalSupplierBalance!: number;
  TotalVaplongOrder!: number;
  TotalOnlineOrder!: number;
  TotalVaplongOrderAmount!: number;
  TotalOnlineOrderAmount!: number;
  TotalExternalIncomingOrders!:number;
}
