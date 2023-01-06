import { ServerResult } from "src/app/CallerModule/Services/ServerResult";
import { UserModel } from "../UserModel";
export class  LoginResponseModel extends  ServerResult
{
  UserModel!:UserModel;


}

