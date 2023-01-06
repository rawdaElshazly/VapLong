import { FormControl } from "@angular/forms";

export class  SignInModel{
    //======Private Members======================

    //======Constructor===========================

    //======Public Members========================
    public UserName!: string;
    public Password!: string;
    public grant_type!: string|"password";

}
