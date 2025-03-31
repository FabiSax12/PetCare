import { notifications } from "../mock/notifications";
import { Notification } from "../types";

export class NotificationsService {
  getNotificationsByClient(clientUsername: string): Notification[] {
    return notifications.filter((notification) => notification.client === clientUsername);
  }

  markAsRead(id: string): void {
    const notification = notifications.find((n) => n.id === id);
    if (notification) notification.read = true;
  }
}
