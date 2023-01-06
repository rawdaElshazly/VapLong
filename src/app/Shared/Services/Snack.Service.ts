import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { NotificationService } from "@progress/kendo-angular-notification";
@Injectable()
export class SnackService {

  //=========Constructor=========
  @ViewChild("template", { read: TemplateRef, static: false })

  public hideAfter = 2000;
  constructor(private notificationService: NotificationService) { }
  //=======Services ==============
  public show(message: string,notificationType:string|any, duration: number = 2000): void {
    this.notificationService.show({
      content: message,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 800 },
      type: { style: notificationType, icon: true },
      hideAfter: duration,
    });
  }
}
