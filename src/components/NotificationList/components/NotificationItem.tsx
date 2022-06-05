import { useEffect } from "react";
import { useActions } from "hooks/use-actions";
import { notificationsActions } from "store/notifications";
import { CustomNotification } from "store/notifications/types";
import "./NotificationItem.css";

type NotificationProps = {
  item: CustomNotification;
};

const NOTIFICATION_DEFAULT_TIMEOUT = 3000;

export function NotificationItem(props: NotificationProps) {
  const {
    item: { id, message, timeout = NOTIFICATION_DEFAULT_TIMEOUT },
  } = props;

  const { clearNotifications } = useActions(notificationsActions);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearNotifications(id);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div className="notification-item">{message}</div>;
}
