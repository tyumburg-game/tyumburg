import block from "bem-cn";
import Modal from "components/Modal/Modal";
import "./NotificationList.css";
import { useTypedSelector } from "hooks/useTypedSelector";
import { NotificationItem } from "./components/NotificationItem";

const b = block("notification-block");

export function NotificationList() {
  const { items } = useTypedSelector((state) => state.notifications);

  return (
    <Modal className={b({ active: items.length > 0 })}>
      <Modal.Header title="">
        {items.map((notification) => (
          <NotificationItem item={notification} key={notification.id} />
        ))}
      </Modal.Header>
    </Modal>
  );
}
