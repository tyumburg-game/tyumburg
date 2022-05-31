import { useEffect } from "react";
import block from "bem-cn";
import Modal from "components/Modal/Modal";
import "./Notification.css";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/use-actions";
import { notificationActions } from "store/notification/actions";

const b = block("notification");
const TIMEOUT = 3000;

export default function Notification() {
  const { messages } = useTypedSelector((state) => state.notification);

  const { clearNotification } = useActions(notificationActions);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearNotification();
    }, TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [messages]);

  return (
    <Modal className={b({ active: messages.length > 0 })}>
      <Modal.Header title="">
        {messages.map((message) => (
          <div className="notification__message" key={message}>
            {message}
          </div>
        ))}
      </Modal.Header>
    </Modal>
  );
}
