import { ServerResult } from "src/app/CallerModule/Services/ServerResult";

export class  TopProductModel extends  ServerResult
{
  public TopProducts!: Product[][];

}
 class Product
{
  SKU!: string;
  Product!: string;
  Quantity!: number
}
