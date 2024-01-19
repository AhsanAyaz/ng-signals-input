import { Component, EventEmitter, Input, Output } from '@angular/core';
import dummyNotifications, { Notification } from '../dummy-notifications';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notifications-manager',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  @Output() notificationAdded = new EventEmitter<Notification>();
  @Output() notificationRemoved = new EventEmitter<Notification>();
  @Output() notificationsCleared = new EventEmitter();
  @Output() readToggleClicked = new EventEmitter<Notification>();
  @Input() notifications: Notification[] = [];

  addNotification() {
    this.notificationAdded.emit(dummyNotifications.selectRandom());
  }

  removeNotification(notification: Notification) {
    this.notificationRemoved.emit(notification);
  }

  reset() {
    this.notificationsCleared.emit();
  }

  markNotification(notification: Notification) {
    this.readToggleClicked.emit(notification);
  }
}
