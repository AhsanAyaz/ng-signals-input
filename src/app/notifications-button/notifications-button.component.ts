import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  input,
} from '@angular/core';
import { Notification } from '../dummy-notifications';

@Component({
  selector: 'app-notifications-button',
  standalone: true,
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent implements OnChanges {
  @Input() notifications: Notification[] = [];
  unreadCount = 0;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notifications'].currentValue) {
      this.unreadCount = this.notifications.filter((noti) => {
        return !noti.read;
      }).length;
    }
  }
}
