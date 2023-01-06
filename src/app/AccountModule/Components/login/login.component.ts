import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInModel } from '../../Model/SignInModel';
import { ServerResult } from 'src/app/CallerModule/Services/ServerResult';
import { UserModel } from '../../Model/UserModel';
import { AuthManager } from 'src/app/CallerModule/Services/AuthManager';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService ]
})
export class LoginComponent implements OnInit, OnDestroy {
  // KeenThemes mock, change it to:
  defaultAuth: any = {
    email: 'admin@demo.com',
    password: 'demo',
  };
  loginForm!: FormGroup;
  hasError!: boolean;
  message!:string ;
  returnUrl!: string;
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private authManager: AuthManager,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (this.authService.isAuthenticate()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
      this.AutoLogin();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }
  GetToken(model:SignInModel){
    this.authService.GetToken(model).subscribe(
      (res) => {
        console.log(res);
        this.authManager.setTokenExpiration(res.expires_in);
        this.authManager.setAccesToken(res.access_token);


      },
      (err) => {
        this.hasError = true;
        console.log(err)
      }
      );
  }

  AutoLogin() {
    const accessTokenObj = this.authManager.getAccesToken();
    // Retrieve rememberMe value from local storage
    if (accessTokenObj != null && accessTokenObj != "") {
      this.router.navigate(['/dashboard']);
    }
  }
  submit() {
    this.hasError = false;
     var model:SignInModel= {
      UserName :this.f['userName'].value,
      Password:this.f['password'].value,
      grant_type:"password"
     };


    this.authService.signInUser(model).subscribe(
      (res) => {
        if(res.ResponseCode!=0)
        {
          this.hasError= true;
          this.message = res.ResponseText;
        }
        else{
        console.log(res.UserModel)
         let userModel: UserModel = res.UserModel;
         this.GetToken(model)
        this.authManager.SetUser(userModel);
        // this.authManager.setRefreshToken(tokenModel.refreshToken);
        // this.authManager.setTokenExpiration(tokenModel.expiration);
        // if (this.rememberMe) {
        //   this.authManager.setRememberMe();
        // }
        this.router.navigate(['/dashboard']);
      }

      },
      (err) => {
     //   var respone = err.error as ServerResult<string>;
        this.hasError = true;
       // this.message= err.
        console.log(err)

        // this.notificationService.show({
        //   content:respone.responseObject,
        //   cssClass: "button-notification",
        //   animation: { type: "fade", duration: 400 },
        //   position: { horizontal: "right", vertical: "top" },
        //   type: { style: "error", icon: true },
        // });
      }
      );




  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
