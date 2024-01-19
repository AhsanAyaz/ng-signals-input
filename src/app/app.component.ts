import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';
import { Notification } from './dummy-notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NotificationsButtonComponent,
    NotificationsManagerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  notifications: Notification[] = [];

  addNotification(notification: Notification) {
    this.notifications = [notification, ...this.notifications];
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(
      (noti) => noti.uuid !== notification.uuid
    );
  }

  toggleNotificationRead(notification: Notification) {
    this.notifications = this.notifications.map((noti) => {
      if (noti.uuid !== notification.uuid) {
        return noti;
      }
      return {
        ...noti,
        read: !noti.read,
      };
    });
  }

  clearAllNotifications() {
    this.notifications = [];
  }
}
