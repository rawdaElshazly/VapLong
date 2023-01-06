export class APIs {
  //=========Profile============
  static Account={

    Login:"api/User/Login",
    token:"token",
    GetAllAuthorizeActionsByUserID:"api/User/GetAllAuthorizeActionsByUserID"

  }


  //=======Report=======
  static Report={
    GetTopProductByPurchaseForDashboard:"api/Report/GetTopProductByPurchaseForDashboard",
    GetAnnualDashboardStatsForPurchase:"api/Report/GetAnnualDashboardStatsForPurchase",
    GetAnnualDashboardStatsForSale:"api/Report/GetAnnualDashboardStatsForSale",
    GetTopProductBySaleForDashboard:"api/Report/GetTopProductBySaleForDashboard",
    GetTodayHeadQuarterDashBoardStatsCount:"api/Report/GetTodayHeadQuarterDashBoardStatsCount",

  }
  //=======CashRegister=======

  static CashRegister={
    CheckUserOpenCashRegisterByUserID:"api/CashRegister/CheckUserOpenCashRegisterByUserID"
  }


  static  ClientAppBaseURL = 'https://app-homelingo-usw-dev-001.azurewebsites.net'
  static ClientAppURL={
    Resetpassword: APIs.ClientAppBaseURL+'/Account/Resetpassword',
    Emailconfirmation: APIs.ClientAppBaseURL+'/Account/emailconfirmation',
  }
  static ApiUrl={
   Url :  "http://85.215.230.111:543/"//Locall
   //Url: "https://api-homelingo-usw-dev-001.azurewebsites.net/" //Development
  }
}
