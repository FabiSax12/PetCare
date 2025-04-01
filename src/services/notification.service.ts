import notifications from "../db/notifications.json";
import { Notification } from "../types";

export class NotificationService {
  private notifications: Notification[];

  constructor() {
    this.notifications = notifications as Notification[];
  }

  // Obtener todas las notificaciones
  getAllNotifications(): Notification[] {
    return this.notifications;
  }

  // Obtener notificaciones por cliente
  getNotificationsByClient(clientUsername: string): Notification[] {
    return this.notifications.filter((notification) => notification.client === clientUsername);
  }

  // Marcar una notificación como leída
  markAsRead(id: string): boolean {
    const notification = this.notifications.find((n) => n.id === id);
    if (notification) {
      notification.read = true;
      return true;
    }
    return false;
  }

  // Añadir una nueva notificación
  addNotification(newNotification: Notification): Notification {
    this.notifications.push(newNotification);
    return newNotification;
  }

  // Eliminar una notificación por ID
  deleteNotification(id: string): boolean {
    const notificationIndex = this.notifications.findIndex((notification) => notification.id === id);
    if (notificationIndex !== -1) {
      this.notifications.splice(notificationIndex, 1);
      return true;
    }
    return false;
  }

  // Obtener notificaciones por tipo
  getNotificationsByType(type: string): Notification[] {
    return this.notifications.filter((notification) => notification.type === type);
  }
}
