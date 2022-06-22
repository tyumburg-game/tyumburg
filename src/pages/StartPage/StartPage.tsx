import { useState } from "react";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { PATHS } from "Routes/paths";
import { useLink } from "hooks/use-link";
import "./StartPage.css";

export function StartPage() {
  const [menuItems] = useState([
    { label: "Играть", url: PATHS.GAME },
    { label: "Профиль", url: PATHS.PROFILE },
    { label: "Логин", url: PATHS.SIGN_IN },
    { label: "Регистрация", url: PATHS.SIGN_UP },
    { label: "Таблица лидеров", url: PATHS.LEADERBOARD },
    { label: "Форум", url: PATHS.FORUM },
    { label: "Компоненты", url: PATHS.UI },
  ]);

  const navigate = useLink();

  return (
    <Modal>
      <Modal.Header title="Менdю" />
      <Modal.Content>
        <div className="main-menu">
          {menuItems.map((item) => (
            <Button
              mode="secondary"
              className="main-menu__btn"
              onClick={navigate(item.url)}
              key={item.url}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Modal.Content>
    </Modal>
  );
}
