// notification.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string | undefined;

  hideNotification(): void {
    this.message = undefined;
  }

  closeNotification() {
    this.message = '';
  }
}
