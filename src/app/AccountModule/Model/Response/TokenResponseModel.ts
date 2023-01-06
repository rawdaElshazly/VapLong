import { ServerResult } from "src/app/CallerModule/Services/ServerResult";
export class  TokenResponseModel extends  ServerResult
{
  access_token!: string;
  token_type!: string;
  expires_in!: string;


}

