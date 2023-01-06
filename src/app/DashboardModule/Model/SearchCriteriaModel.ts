export class  SearchCriteriaModel{
  //======Private Members======================

  //======Constructor===========================

  //======Public Members========================
  public FromDate: Date=new Date();
  public ToDate:  Date=new Date();
  public PageSize:number=100;
  public PageNo:number=0;
  public IsGetAll:boolean=true;
}
