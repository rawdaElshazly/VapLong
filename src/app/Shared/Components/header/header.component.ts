import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AccountModule/services/AuthService';
import { AuthManager } from 'src/app/CallerModule/Services/AuthManager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router, public authManager: AuthManager) {

  }
  //======Public Members========================
  token:any=null;
  public isCollapsed = false;
  ngOnInit() {
  }
  Logout() {
      this.authService.Logout() ;
      this.router.navigate(['/Home/Home']);
  }
  isAuthorizedUser()
  {
  return this.authManager.isAuthorizedUser();
  }
}
