import { useEffect, useState } from "react";
import Modal from "components/Modal/Modal";
import "./Notification.css";
import { Nullable } from "types/util";

type NotificationProps = {
  message: string;
};

export default function Notification(props: NotificationProps) {
  const { message } = props;
  const [notificationTimeout, setNotificationTimeout] =
    useState<Nullable<NodeJS.Timeout>>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("there will be clear notification action");
    }, 3000);

    setNotificationTimeout(timeout);

    return () => {
      if (notificationTimeout) {
        clearTimeout(notificationTimeout);
      }
    };
  }, [message]);

  return (
    <Modal className="notification">
      <Modal.Header title={message} />
    </Modal>
  );
}
