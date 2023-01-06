import { Component, OnInit } from '@angular/core';
import { AuthManager } from 'src/app/CallerModule/Services/AuthManager';
import { ThemeModeService } from 'src/app/_metronic/partials/layout/theme-mode-switcher/theme-mode.service';
@Component({
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.modeService.init();

  }
  constructor(private authHelper: AuthManager,
    private modeService: ThemeModeService){
      
  }

 //======Public Members========================
 public isAutherizedUser() {
  let temp = this.authHelper.isAuthorizedUser();
  if (!temp)
    return temp;
  return temp;
}


}
