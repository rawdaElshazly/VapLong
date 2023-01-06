export class  UserModel{
  //======Private Members======================

  //======Constructor===========================

  //======Public Members========================
ID!: number;
FirstName!: string;
LastName!: string;
EmailAddress!: string;
PhoneNo!: string;
Address!: string;
UserName!: string;
Password!: string;
RoleID!: number;
Role!: string;
Language!: string;
Image!: string;
ImageStatus!: string;
ParentUserID!:number;
IsActive!: boolean;
OutletID!: number;
Outlet!: string;
PassResetterCode!: string;
RelatedCustomerID!: number;
CreatedAt!: Date;
UpdatedAt!: Date;
UpdatedByUserID!:number;
UpdatePermission!: string;
UpdatePasswordPermission!: string;
IsDeliveryPerson!: boolean;
IsReseller!: boolean

}
