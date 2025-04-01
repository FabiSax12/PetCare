import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth";
import { Notification } from "../types";
import { CheckCheck } from "lucide-react";
import { notificationService } from "../services";

export const NotificationsPage = () => {
  const authContext = useContext(AuthContext);

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const clientNotifications = notificationService.getNotificationsByClient(authContext.user!.username);
    setNotifications(clientNotifications);
  }, [authContext.user]);

  const handleMarkAsRead = (id: string) => {
    notificationService.markAsRead(id);
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Notificaciones</h1>

      <div>
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500">No tienes notificaciones.</div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 mb-4 rounded-lg ${notification.read ? "bg-gray-100" : "bg-bg-primary"}`}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{notification.message}</p>
                {/* <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Marcar como leída
                </button> */}
              </div>
              <p className="text-sm text-gray-500">Fecha: {new Date(notification.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">Método de contacto preferido: {notification.preferredContact}</p>
              <div className="flex justify-end">
                <CheckCheck
                  onClick={() => handleMarkAsRead(notification.id)}
                  className={`
                  cursor-pointer
                  ${notification.read ? "text-highlight" : "text-fg-primary"}
                `} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
