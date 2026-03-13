import React, { useState } from "react";
import "./notification.css";

const sampleNotifications = [
  {
    id: 1,
    title: "New rescue request near you",
    time: "2 min ago",
    read: false,
    icon: "🚨"
  },
  {
    id: 2,
    title: "Volunteer joined your team",
    time: "10 min ago",
    read: true,
    icon: "👤"
  },
  {
    id: 3,
    title: "Location updated successfully",
    time: "1 hour ago",
    read: true,
    icon: "📍"
  }
];

export default function NotificationBell() {

  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="notification-wrapper">

      <div
        className="bell-icon"
        onClick={() => setOpen(!open)}
      >
        🔔
        {unreadCount > 0 && (
          <span className="badge">{unreadCount}</span>
        )}
      </div>

      {open && (
        <div className="dropdown">

          <h4>Notifications</h4>

          {notifications.map(n => (
            <div
              key={n.id}
              className={`notification-item ${n.read ? "" : "unread"}`}
              onClick={() => markAsRead(n.id)}
            >

              <span className="icon">{n.icon}</span>

              <div className="content">
                <p>{n.title}</p>
                <span className="time">{n.time}</span>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}
