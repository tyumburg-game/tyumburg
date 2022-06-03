import { useEffect } from "react";
import { useActions } from "hooks/use-actions";
import { notificationActions } from "store/notification/actions";
import { CustomNotification } from "store/notification/types";
import "./NotificationItem.css";

type NotificationProps = {
  item: CustomNotification;
};

const NOTIFICATION_DEFAULT_TIMEOUT = 3000;

export function NotificationItem(props: NotificationProps) {
  const {
    item: { id, message, timeout = NOTIFICATION_DEFAULT_TIMEOUT },
  } = props;

  const { clearNotification } = useActions(notificationActions);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearNotification(id);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div className="notification-item">{message}</div>;
}
